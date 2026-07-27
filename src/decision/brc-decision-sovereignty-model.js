/**
 * BRC Decision Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines decisions as sovereign structural
 * objects representing declared selections, determinations, or state choices
 * made within a contained system boundary.
 *
 * A decision represents declared outcome meaning.
 *
 * A decision does not create authority.
 *
 * A decision does not create ownership.
 *
 * A decision does not create identity.
 *
 * A decision does not bypass boundaries.
 *
 * A decision does not replace governance.
 *
 * Decision sovereignty preserves:
 *
 * - Decision identity
 * - Source responsibility
 * - Authority reference
 * - Governance relationship
 * - Policy relationship
 * - Boundary integrity
 * - Evidence relationship
 * - Continuity protection
 * - Controlled change
 *
 * A decision is defined by:
 *
 * - What determination it represents
 * - Who is responsible for the decision
 * - What authority relationship applies
 * - What governance relationship contains it
 * - What policies relate to it
 * - What boundary limits its effect
 * - What evidence supports the decision
 * - What continuity preserves its meaning
 *
 * This module defines decision sovereignty structure only.
 *
 * This module does not:
 * - Make decisions
 * - Approve actions
 * - Execute workflows
 * - Perform voting
 * - Assign authority
 * - Enforce policies
 * - Resolve disputes
 * - Modify external systems
 *
 * Decision definition comes before decision enforcement.
 */

export const BRC_DECISION_SOVEREIGNTY_TYPE =
  "BRC_DECISION_SOVEREIGNTY";

export const BRC_DECISION_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_DECISION_STATES = Object.freeze([
  "DECLARED",
  "PROPOSED",
  "RECOGNIZED",
  "SEALED",
  "REVERSED",
  "ARCHIVED"
]);

export class BRCDecisionSovereignty {
  constructor({
    id,
    decisionType,
    responsibilityReference = null,
    authorityReference = null,
    governanceReference = null,
    policyReferences = [],
    boundary,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_DECISION_SOVEREIGNTY_TYPE;
    this.version = BRC_DECISION_SOVEREIGNTY_VERSION;

    this.id = id;

    this.decisionType = decisionType;

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
      decisionType: this.decisionType,
      state: this.state
    };
  }

  getDecisionDefinition() {
    return {
      decisionType: this.decisionType,
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
    if (!BRC_DECISION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCDecisionSovereignty(config) {
  return new BRCDecisionSovereignty(config);
}
