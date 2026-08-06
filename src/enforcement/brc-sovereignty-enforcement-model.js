/**
 * BRC Sovereignty Enforcement Model
 * 
 * Blast-Radius Control (BRC) defines enforcement as a sovereign structural
 * object representing declared application boundaries for approved structural
 * rules within a contained system boundary.
 *
 * Enforcement represents controlled application.
 *
 * Enforcement does not create authority.
 *
 * Enforcement does not create ownership.
 *
 * Enforcement does not define policy.
 *
 * Enforcement does not replace governance.
 *
 * Enforcement does not bypass boundaries.
 *
 * Enforcement sovereignty preserves:
 *
 * - Enforcement identity
 * - Subject reference
 * - Policy reference
 * - Authority reference
 * - Boundary reference
 * - Responsibility reference
 * - Allowed movement
 * - Prohibited movement
 * - Evidence relationship
 * - Continuity protection
 * - Enforcement state
 *
 * Enforcement is defined by:
 *
 * - What structure is being enforced
 * - What declared policy applies
 * - What authority relationship permits enforcement
 * - What boundary contains enforcement
 * - What responsibility owns the enforcement relationship
 * - What evidence supports the enforcement condition
 * - What continuity preserves enforcement meaning
 *
 * This module defines enforcement sovereignty structure only.
 *
 * This module does not:
 * - Execute actions
 * - Grant permissions
 * - Authenticate users
 * - Modify objects
 * - Change policies
 * - Resolve disputes
 * - Override governance
 * - Modify external systems
 *
 * Enforcement definition comes before enforcement execution.
 */

export const BRC_SOVEREIGNTY_ENFORCEMENT_TYPE =
  "BRC_SOVEREIGNTY_ENFORCEMENT";

export const BRC_SOVEREIGNTY_ENFORCEMENT_VERSION =
  "1.0.0";

export const BRC_ENFORCEMENT_STATES = Object.freeze([
  "DECLARED",
  "PENDING",
  "AUTHORIZED",
  "ACTIVE",
  "SEALED",
  "ARCHIVED"
]);

export class BRCSovereigntyEnforcement {
  constructor({
    id,
    subjectReference,
    policyReference = null,
    authorityReference = null,
    responsibilityReference = null,
    boundaryReference,
    allowedMovement = [],
    prohibitedMovement = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_ENFORCEMENT_TYPE;
    this.version = BRC_SOVEREIGNTY_ENFORCEMENT_VERSION;

    this.id = id;

    this.subjectReference = subjectReference;

    this.policyReference = policyReference;

    this.authorityReference = authorityReference;

    this.responsibilityReference = responsibilityReference;

    this.boundaryReference = boundaryReference;

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
      state: this.state
    };
  }

  getEnforcementDefinition() {
    return {
      subjectReference: this.subjectReference,
      policyReference: this.policyReference,
      authorityReference: this.authorityReference,
      responsibilityReference: this.responsibilityReference,
      boundaryReference: this.boundaryReference,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesSubject(subject) {
    return this.subjectReference === subject;
  }

  referencesPolicy(policy) {
    return this.policyReference === policy;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReference === responsibility;
  }

  referencesBoundary(boundary) {
    return this.boundaryReference === boundary;
  }

  allowsMovement(movement) {
    return this.allowedMovement.includes(movement);
  }

  prohibitsMovement(movement) {
    return this.prohibitedMovement.includes(movement);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  preservesBoundary() {
    return Boolean(this.boundaryReference);
  }

  transition(nextState) {
    if (!BRC_ENFORCEMENT_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyEnforcement(config) {
  return new BRCSovereigntyEnforcement(config);
}
