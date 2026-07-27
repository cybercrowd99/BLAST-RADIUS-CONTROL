/**
 * BRC State Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines state as a sovereign structural object
 * representing declared condition, position, and continuity of a contained
 * system boundary.
 *
 * State represents preserved condition meaning.
 *
 * State does not create identity.
 *
 * State does not create ownership.
 *
 * State does not create authority.
 *
 * State does not execute change.
 *
 * State does not bypass boundaries.
 *
 * State sovereignty preserves:
 *
 * - State identity
 * - Current condition
 * - Previous condition reference
 * - Responsibility relationship
 * - Authority reference
 * - Governance relationship
 * - Change relationship
 * - Evidence relationship
 * - Continuity protection
 * - Boundary integrity
 *
 * A state is defined by:
 *
 * - What condition it represents
 * - What boundary contains the state
 * - Who is responsible for preserving meaning
 * - What authority relationship applies
 * - What governance relationship references it
 * - What changes may transition it
 * - What evidence supports the state
 * - What continuity preserves the relationship
 *
 * This module defines state sovereignty structure only.
 *
 * This module does not:
 * - Execute state transitions
 * - Manage lifecycle systems
 * - Persist state records
 * - Trigger events
 * - Approve changes
 * - Control applications
 * - Replace state machines
 * - Modify external systems
 *
 * State definition comes before state enforcement.
 */

export const BRC_STATE_SOVEREIGNTY_TYPE =
  "BRC_STATE_SOVEREIGNTY";

export const BRC_STATE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_STATE_VALUES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "INACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCStateSovereignty {
  constructor({
    id,
    stateType,
    condition,
    previousStateReference = null,
    responsibilityReference = null,
    authorityReference = null,
    governanceReference = null,
    changeReference = null,
    boundary,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_STATE_SOVEREIGNTY_TYPE;
    this.version = BRC_STATE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.stateType = stateType;

    this.condition = condition;

    this.previousStateReference = previousStateReference;

    this.responsibilityReference = responsibilityReference;

    this.authorityReference = authorityReference;

    this.governanceReference = governanceReference;

    this.changeReference = changeReference;

    this.boundary = boundary;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      stateType: this.stateType,
      state: this.state
    };
  }

  getStateDefinition() {
    return {
      stateType: this.stateType,
      condition: this.condition,
      previousStateReference: this.previousStateReference,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      governanceReference: this.governanceReference,
      changeReference: this.changeReference,
      boundary: this.boundary,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReference === responsibility;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  referencesGovernance(governance) {
    return this.governanceReference === governance;
  }

  referencesChange(change) {
    return this.changeReference === change;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    if (!BRC_STATE_VALUES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCStateSovereignty(config) {
  return new BRCStateSovereignty(config);
}
