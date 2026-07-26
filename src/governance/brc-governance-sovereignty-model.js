/**
 * BRC Governance Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines governance as a sovereign structural
 * object representing declared coordination, responsibility, and preservation
 * relationships within a contained system boundary.
 *
 * Governance represents structured stewardship.
 *
 * Governance does not create ownership.
 *
 * Governance does not create authority.
 *
 * Governance does not create identity.
 *
 * Governance does not bypass boundaries.
 *
 * Governance does not replace declared responsibility.
 *
 * Governance sovereignty preserves:
 *
 * - Governance identity
 * - Responsibility relationships
 * - Authority references
 * - Policy relationships
 * - Boundary integrity
 * - Decision structure references
 * - Evidence relationships
 * - Continuity protection
 * - Controlled change
 *
 * Governance is defined by:
 *
 * - What responsibility it preserves
 * - Who maintains the governance relationship
 * - What authority references apply
 * - What policies it governs
 * - What boundaries contain governance activity
 * - What changes are recognized
 * - What evidence supports governance state
 * - What continuity preserves meaning
 *
 * This module defines governance sovereignty structure only.
 *
 * This module does not:
 * - Make decisions
 * - Create organizations
 * - Assign authority
 * - Execute policies
 * - Resolve disputes
 * - Manage users
 * - Perform voting
 * - Modify external systems
 *
 * Governance definition comes before governance enforcement.
 */

export const BRC_GOVERNANCE_SOVEREIGNTY_TYPE =
  "BRC_GOVERNANCE_SOVEREIGNTY";

export const BRC_GOVERNANCE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_GOVERNANCE_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "REVIEW",
  "RESTRICTED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCGovernanceSovereignty {
  constructor({
    id,
    governanceType,
    responsibilityReferences = [],
    authorityReferences = [],
    policyReferences = [],
    boundary,
    decisionReferences = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_GOVERNANCE_SOVEREIGNTY_TYPE;
    this.version = BRC_GOVERNANCE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.governanceType = governanceType;

    this.responsibilityReferences = responsibilityReferences;

    this.authorityReferences = authorityReferences;

    this.policyReferences = policyReferences;

    this.boundary = boundary;

    this.decisionReferences = decisionReferences;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      governanceType: this.governanceType,
      state: this.state
    };
  }

  getGovernanceDefinition() {
    return {
      governanceType: this.governanceType,
      responsibilityReferences: this.responsibilityReferences,
      authorityReferences: this.authorityReferences,
      policyReferences: this.policyReferences,
      boundary: this.boundary,
      decisionReferences: this.decisionReferences,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReferences.includes(responsibility);
  }

  referencesAuthority(authority) {
    return this.authorityReferences.includes(authority);
  }

  referencesPolicy(policy) {
    return this.policyReferences.includes(policy);
  }

  referencesDecision(decision) {
    return this.decisionReferences.includes(decision);
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
    if (!BRC_GOVERNANCE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCGovernanceSovereignty(config) {
  return new BRCGovernanceSovereignty(config);
}
