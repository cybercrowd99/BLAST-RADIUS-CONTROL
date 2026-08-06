/**
 * BRC Data Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines data as a sovereign structural object
 * with declared identity, ownership, boundaries, movement rules, continuity,
 * and evidence relationships.
 *
 * Data may move.
 *
 * Movement does not dissolve ownership.
 *
 * Access does not create authority.
 *
 * Usage does not create ownership transfer.
 *
 * Data sovereignty preserves:
 *
 * - Declared data identity
 * - Ownership responsibility
 * - Controlled movement
 * - Boundary integrity
 * - Continuity protection
 * - Evidence preservation
 *
 * Data is defined by:
 *
 * - What it is
 * - Who owns responsibility for it
 * - Where it may move
 * - What movement is allowed
 * - What movement is prohibited
 * - How continuity is preserved
 * - What evidence references exist
 *
 * This module defines data sovereignty structure only.
 *
 * This module does not:
 * - Store data
 * - Collect data
 * - Process data
 * - Transfer data
 * - Grant permissions
 * - Validate consent
 * - Execute transactions
 * - Modify external systems
 *
 * Data definition comes before data enforcement.
 */

export const BRC_DATA_SOVEREIGNTY_TYPE =
  "BRC_DATA_SOVEREIGNTY";

export const BRC_DATA_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_DATA_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCDataSovereignty {
  constructor({
    id,
    name,
    purpose,
    owner,
    responsibility,
    boundary,
    allowedMovement = [],
    prohibitedMovement = [],
    continuityReference = null,
    evidenceReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_DATA_SOVEREIGNTY_TYPE;
    this.version = BRC_DATA_SOVEREIGNTY_VERSION;

    this.id = id;
    this.name = name;

    this.purpose = purpose;

    this.owner = owner;
    this.responsibility = responsibility;

    this.boundary = boundary;

    this.allowedMovement = allowedMovement;
    this.prohibitedMovement = prohibitedMovement;

    this.continuityReference = continuityReference;
    this.evidenceReference = evidenceReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      name: this.name,
      state: this.state
    };
  }

  getDataDefinition() {
    return {
      purpose: this.purpose,
      owner: this.owner,
      responsibility: this.responsibility,
      boundary: this.boundary,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      continuityReference: this.continuityReference,
      evidenceReference: this.evidenceReference,
      state: this.state
    };
  }

  ownsData(owner) {
    return this.owner === owner;
  }

  hasResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  blocksMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  preservesEvidence() {
    return Boolean(this.evidenceReference);
  }

  transition(nextState) {
    if (!BRC_DATA_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCDataSovereignty(config) {
  return new BRCDataSovereignty(config);
}
