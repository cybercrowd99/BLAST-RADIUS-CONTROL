/**
 * BRC Record Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines records as sovereign structural objects
 * that preserve declared information, relationships, state, and continuity
 * within a contained system boundary.
 *
 * A record represents preserved meaning.
 *
 * A record does not create authority.
 *
 * A record does not replace ownership.
 *
 * A record does not bypass boundaries.
 *
 * Record sovereignty preserves:
 *
 * - Record identity
 * - Source responsibility
 * - Authority relationship
 * - Boundary integrity
 * - Continuity protection
 * - Evidence relationship
 * - Controlled state transition
 *
 * A record is defined by:
 *
 * - What it represents
 * - Where it originated
 * - Who is responsible
 * - What authority relates to it
 * - What boundary contains it
 * - What continuity it preserves
 * - What evidence supports it
 *
 * This module defines record sovereignty structure only.
 *
 * This module does not:
 * - Store records
 * - Write databases
 * - Validate evidence
 * - Modify history
 * - Grant permissions
 * - Execute transactions
 * - Manage external systems
 *
 * Record definition comes before record enforcement.
 */

export const BRC_RECORD_SOVEREIGNTY_TYPE =
  "BRC_RECORD_SOVEREIGNTY";

export const BRC_RECORD_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_RECORD_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "VERIFIED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCRecordSovereignty {
  constructor({
    id,
    recordType,
    source,
    owner,
    responsibility,
    authority,
    boundary,
    continuityReference = null,
    evidenceReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_RECORD_SOVEREIGNTY_TYPE;
    this.version = BRC_RECORD_SOVEREIGNTY_VERSION;

    this.id = id;

    this.recordType = recordType;

    this.source = source;

    this.owner = owner;
    this.responsibility = responsibility;
    this.authority = authority;

    this.boundary = boundary;

    this.continuityReference = continuityReference;
    this.evidenceReference = evidenceReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      recordType: this.recordType,
      state: this.state
    };
  }

  getRecordDefinition() {
    return {
      recordType: this.recordType,
      source: this.source,
      owner: this.owner,
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      continuityReference: this.continuityReference,
      evidenceReference: this.evidenceReference,
      state: this.state
    };
  }

  belongsToSource(source) {
    return this.source === source;
  }

  belongsToOwner(owner) {
    return this.owner === owner;
  }

  hasResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  preservesAuthority(authority) {
    return this.authority === authority;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  preservesEvidence() {
    return Boolean(this.evidenceReference);
  }

  transition(nextState) {
    if (!BRC_RECORD_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCRecordSovereignty(config) {
  return new BRCRecordSovereignty(config);
}
