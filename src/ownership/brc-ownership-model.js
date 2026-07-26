/**
 * BRC Ownership Model
 *
 * Blast-Radius Control (BRC) defines ownership as the structural relationship
 * between a component, its responsibility, its authority, and its continuity.
 *
 * Ownership establishes:
 *
 * - Who is responsible
 * - What is controlled
 * - Where authority exists
 * - What cannot be transferred without declaration
 *
 * Ownership is not possession.
 *
 * Ownership is a contained responsibility relationship.
 *
 * This module defines ownership structure only.
 *
 * This module does not:
 * - Transfer ownership
 * - Grant authority
 * - Manage accounts
 * - Execute permissions
 * - Modify records
 * - Resolve disputes
 *
 * Ownership definition comes before ownership enforcement.
 */

export const BRC_OWNERSHIP_TYPE = "BRC_OWNERSHIP";

export const BRC_OWNERSHIP_VERSION = "1.0.0";

export const BRC_OWNERSHIP_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "TRANSFER_PENDING",
  "TRANSFERRED",
  "REVOKED"
]);

export class BRCOwnership {
  constructor({
    id,
    owner,
    subject,
    responsibility,
    authority,
    boundary,
    continuity = null,
    state = "DECLARED"
  }) {
    this.type = BRC_OWNERSHIP_TYPE;
    this.version = BRC_OWNERSHIP_VERSION;

    this.id = id;

    this.owner = owner;
    this.subject = subject;

    this.responsibility = responsibility;
    this.authority = authority;

    this.boundary = boundary;

    this.continuity = continuity;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      owner: this.owner,
      state: this.state
    };
  }

  getOwnershipDefinition() {
    return {
      owner: this.owner,
      subject: this.subject,
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      continuity: this.continuity,
      state: this.state
    };
  }

  ownsSubject(subject) {
    return this.subject === subject;
  }

  belongsToOwner(owner) {
    return this.owner === owner;
  }

  maintainsBoundary(boundary) {
    return this.boundary === boundary;
  }

  canTransfer(targetOwner) {
    return Boolean(
      targetOwner &&
      this.state !== "REVOKED"
    );
  }

  transition(nextState) {
    if (!BRC_OWNERSHIP_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCOwnership(config) {
  return new BRCOwnership(config);
}
