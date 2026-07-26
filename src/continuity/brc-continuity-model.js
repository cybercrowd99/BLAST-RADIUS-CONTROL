/**
 * BRC Continuity Model
 *
 * Blast-Radius Control (BRC) protects continuity by ensuring that identity,
 * authority, evidence, and structural relationships remain intact through
 * controlled change, mutation, and failure conditions.
 *
 * Continuity is not the prevention of change.
 *
 * Continuity is the preservation of meaning while change occurs within
 * a contained radius.
 *
 * This module defines continuity structure only.
 *
 * This module does not:
 * - Store records
 * - Execute recovery operations
 * - Validate evidence
 * - Perform synchronization
 * - Control mutations
 * - Enforce access policies
 *
 * Continuity definition comes before continuity enforcement.
 */

export const BRC_CONTINUITY_TYPE = "BRC_CONTINUITY";

export const BRC_CONTINUITY_VERSION = "1.0.0";

export class BRCContinuity {
  constructor({
    id,
    origin,
    reference,
    owner,
    boundary,
    state = "ACTIVE",
    history = [],
    continuityHash = null
  }) {
    this.type = BRC_CONTINUITY_TYPE;
    this.version = BRC_CONTINUITY_VERSION;

    this.id = id;

    this.origin = origin;
    this.reference = reference;

    this.owner = owner;
    this.boundary = boundary;

    this.state = state;
    this.history = history;

    this.continuityHash = continuityHash;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      state: this.state
    };
  }

  getContinuityDefinition() {
    return {
      origin: this.origin,
      reference: this.reference,
      owner: this.owner,
      boundary: this.boundary,
      state: this.state,
      history: this.history,
      continuityHash: this.continuityHash
    };
  }

  preserveReference(reference) {
    return this.reference === reference;
  }

  belongsToBoundary(boundary) {
    return this.boundary === boundary;
  }

  isActive() {
    return this.state === "ACTIVE";
  }

  recordContinuityEvent(event) {
    return [
      ...this.history,
      event
    ];
  }

  canContinueAfterChange() {
    return Boolean(this.origin && this.reference);
  }
}

export function createBRCContinuity(config) {
  return new BRCContinuity(config);
}
