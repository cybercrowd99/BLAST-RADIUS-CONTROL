/**
 * BRC Sovereignty Validation Model
 * 
 * Blast-Radius Control (BRC) defines validation as a sovereign structural
 * object representing declared structural examination of sovereignty-defined
 * objects within a contained system boundary.
 *
 * Validation represents structural assessment.
 *
 * Validation does not create authority.
 *
 * Validation does not create ownership.
 *
 * Validation does not enforce behavior.
 *
 * Validation does not modify declarations.
 *
 * Validation does not bypass boundaries.
 *
 * Validation sovereignty preserves:
 *
 * - Validation identity
 * - Subject reference
 * - Sovereignty type reference
 * - Boundary reference
 * - Required reference awareness
 * - Structural integrity
 * - Evidence relationship
 * - Continuity protection
 * - Validation state
 *
 * Validation is defined by:
 *
 * - What object is being examined
 * - What sovereignty definition applies
 * - What boundary contains the object
 * - What references are required
 * - What evidence supports the structure
 * - What continuity preserves meaning
 * - What validation result state exists
 *
 * This module defines validation sovereignty structure only.
 *
 * This module does not:
 * - Enforce policies
 * - Grant permissions
 * - Execute workflows
 * - Modify objects
 * - Repair invalid structures
 * - Resolve disputes
 * - Alter external systems
 *
 * Validation definition comes before validation enforcement.
 */

export const BRC_SOVEREIGNTY_VALIDATION_TYPE =
  "BRC_SOVEREIGNTY_VALIDATION";

export const BRC_SOVEREIGNTY_VALIDATION_VERSION =
  "1.0.0";

export const BRC_VALIDATION_STATES = Object.freeze([
  "DECLARED",
  "PENDING",
  "VALID",
  "INVALID",
  "SEALED"
]);

export class BRCSovereigntyValidation {
  constructor({
    id,
    subjectReference,
    sovereigntyType,
    boundaryReference,
    requiredReferences = [],
    evidenceReference = null,
    continuityReference = null,
    result = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_VALIDATION_TYPE;
    this.version = BRC_SOVEREIGNTY_VALIDATION_VERSION;

    this.id = id;

    this.subjectReference = subjectReference;

    this.sovereigntyType = sovereigntyType;

    this.boundaryReference = boundaryReference;

    this.requiredReferences = requiredReferences;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.result = result;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      sovereigntyType: this.sovereigntyType,
      state: this.state
    };
  }

  getValidationDefinition() {
    return {
      subjectReference: this.subjectReference,
      sovereigntyType: this.sovereigntyType,
      boundaryReference: this.boundaryReference,
      requiredReferences: this.requiredReferences,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      result: this.result,
      state: this.state
    };
  }

  referencesSubject(subject) {
    return this.subjectReference === subject;
  }

  matchesSovereigntyType(type) {
    return this.sovereigntyType === type;
  }

  referencesBoundary(boundary) {
    return this.boundaryReference === boundary;
  }

  requiresReference(reference) {
    return this.requiredReferences.includes(reference);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  hasStructuralBasis() {
    return Boolean(
      this.subjectReference &&
      this.sovereigntyType &&
      this.boundaryReference
    );
  }

  setResult(result) {
    this.result = result;
    return this.result;
  }

  transition(nextState) {
    if (!BRC_VALIDATION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyValidation(config) {
  return new BRCSovereigntyValidation(config);
}
