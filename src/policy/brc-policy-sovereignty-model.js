/**
 * BRC Policy Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines policies as sovereign structural objects
 * representing declared rules governing movement, responsibility, authority,
 * and containment within a system boundary.
 *
 * A policy represents declared structure.
 *
 * A policy does not create authority.
 *
 * A policy does not create ownership.
 *
 * A policy does not create identity.
 *
 * A policy does not grant permissions.
 *
 * A policy does not bypass boundaries.
 *
 * Policy sovereignty preserves:
 *
 * - Policy identity
 * - Authority relationship
 * - Responsibility relationship
 * - Permission relationship
 * - Boundary integrity
 * - Movement rules
 * - Evidence relationship
 * - Continuity protection
 *
 * A policy is defined by:
 *
 * - What rule it represents
 * - Who owns the authority relationship
 * - What responsibility it governs
 * - What permissions it references
 * - What boundary contains the policy
 * - What movement is allowed
 * - What movement is prohibited
 * - What evidence supports the policy
 * - What continuity preserves the rule
 *
 * This module defines policy sovereignty structure only.
 *
 * This module does not:
 * - Execute policies
 * - Enforce rules
 * - Grant permissions
 * - Manage users
 * - Authenticate requests
 * - Resolve compliance decisions
 * - Replace governance systems
 * - Modify external systems
 *
 * Policy definition comes before policy enforcement.
 */

export const BRC_POLICY_SOVEREIGNTY_TYPE =
  "BRC_POLICY_SOVEREIGNTY";

export const BRC_POLICY_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_POLICY_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "RETIRED",
  "ARCHIVED"
]);

export class BRCPolicySovereignty {
  constructor({
    id,
    policyType,
    authorityReference = null,
    responsibilityReference = null,
    permissionReferences = [],
    boundary,
    allowedMovement = [],
    prohibitedMovement = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_POLICY_SOVEREIGNTY_TYPE;
    this.version = BRC_POLICY_SOVEREIGNTY_VERSION;

    this.id = id;

    this.policyType = policyType;

    this.authorityReference = authorityReference;

    this.responsibilityReference = responsibilityReference;

    this.permissionReferences = permissionReferences;

    this.boundary = boundary;

    this.allowedMovement = allowedMovement;

    this.prohibitedMovement = prohibitedMovement;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      policyType: this.policyType,
      state: this.state
    };
  }

  getPolicyDefinition() {
    return {
      policyType: this.policyType,
      authorityReference: this.authorityReference,
      responsibilityReference: this.responsibilityReference,
      permissionReferences: this.permissionReferences,
      boundary: this.boundary,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReference === responsibility;
  }

  referencesPermission(permission) {
    return this.permissionReferences.includes(permission);
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  blocksMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    if (!BRC_POLICY_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCPolicySovereignty(config) {
  return new BRCPolicySovereignty(config);
}
