/**
 * BRC Change Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines change as a sovereign structural object
 * representing declared transitions between states, structures, or
 * relationships within a contained system boundary.
 *
 * Change represents controlled transition meaning.
 *
 * Change does not create authority.
 *
 * Change does not create ownership.
 *
 * Change does not create identity.
 *
 * Change does not bypass boundaries.
 *
 * Change does not replace governance.
 *
 * Change sovereignty preserves:
 *
 * - Change identity
 * - Source state
 * - Target state
 * - Responsibility relationship
 * - Authority reference
 * - Governance relationship
 * - Policy relationship
 * - Boundary integrity
 * - Evidence relationship
 * - Continuity protection
 *
 * A change is defined by:
 *
 * - What state or structure is changing
 * - What the original state represents
 * - What the resulting state represents
 * - Who is responsible for the change
 * - What authority relationship applies
 * - What governance relationship contains it
 * - What policies relate to it
 * - What boundary limits its effect
 * - What evidence supports the transition
 * - What continuity preserves meaning
 *
 * This module defines change sovereignty structure only.
 *
 * This module does not:
 * - Execute changes
 * - Modify state
 * - Deploy updates
 * - Perform migrations
 * - Approve changes
 * - Manage workflows
 * - Resolve conflicts
 * - Modify external systems
 *
 * Change definition comes before change enforcement.
 */

export const BRC_CHANGE_SOVEREIGNTY_TYPE =
  "BRC_CHANGE_SOVEREIGNTY";

export const BRC_CHANGE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_CHANGE_STATES = Object.freeze([
  "DECLARED",
  "PROPOSED",
  "AUTHORIZED",
  "APPLIED",
  "REVERTED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCChangeSovereignty {
  constructor({
    id,
    changeType,
    sourceState = null,
    targetState = null,
    responsibilityReference = null,
    authorityReference = null,
    governanceReference = null,
    policyReferences = [],
    boundary,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_CHANGE_SOVEREIGNTY_TYPE;
    this.version = BRC_CHANGE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.changeType = changeType;

    this.sourceState = sourceState;

    this.targetState = targetState;

    this.responsibilityReference = responsibilityReference;

    this.authorityReference = authorityReference;

    this.governanceReference = governanceReference;

    this.policyReferences = policyReferences;

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
      changeType: this.changeType,
      state: this.state
    };
  }

  getChangeDefinition() {
    return {
      changeType: this.changeType,
      sourceState: this.sourceState,
      targetState: this.targetState,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      governanceReference: this.governanceReference,
      policyReferences: this.policyReferences,
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

  referencesPolicy(policy) {
    return this.policyReferences.includes(policy);
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
    if (!BRC_CHANGE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCChangeSovereignty(config) {
  return new BRCChangeSovereignty(config);
}
