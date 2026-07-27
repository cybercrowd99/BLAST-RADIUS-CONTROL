/**
 * BRC Sovereignty Resolution Model
 *
 * Blast-Radius Control (BRC) defines resolution as a sovereign structural
 * object representing declared reference connection between sovereignty-defined
 * structures within a contained system boundary.
 *
 * Resolution represents reference discovery.
 *
 * Resolution does not create authority.
 *
 * Resolution does not create ownership.
 *
 * Resolution does not execute behavior.
 *
 * Resolution does not modify declarations.
 *
 * Resolution does not bypass boundaries.
 *
 * Resolution sovereignty preserves:
 *
 * - Resolution identity
 * - Subject reference
 * - Target reference
 * - Sovereignty type reference
 * - Boundary relationship
 * - Continuity relationship
 * - Relationship references
 * - Evidence relationship
 * - Resolution state
 *
 * Resolution is defined by:
 *
 * - What structure requires resolution
 * - What reference is being resolved
 * - What target relationship is declared
 * - What boundary contains the relationship
 * - What continuity preserves the reference
 * - What evidence supports the relationship
 * - What resolution state exists
 *
 * This module defines resolution sovereignty structure only.
 *
 * This module does not:
 * - Execute services
 * - Route requests
 * - Grant permissions
 * - Enforce policies
 * - Modify objects
 * - Create dependencies
 * - Alter external systems
 *
 * Resolution definition comes before resolution enforcement.
 */

export const BRC_SOVEREIGNTY_RESOLUTION_TYPE =
  "BRC_SOVEREIGNTY_RESOLUTION";

export const BRC_SOVEREIGNTY_RESOLUTION_VERSION =
  "1.0.0";

export const BRC_RESOLUTION_STATES = Object.freeze([
  "DECLARED",
  "PENDING",
  "RESOLVED",
  "UNRESOLVED",
  "SEALED"
]);

export class BRCSovereigntyResolution {
  constructor({
    id,
    subjectReference,
    targetReference = null,
    sovereigntyType = null,
    boundaryReference,
    continuityReference = null,
    relationshipReferences = [],
    evidenceReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_RESOLUTION_TYPE;
    this.version = BRC_SOVEREIGNTY_RESOLUTION_VERSION;

    this.id = id;

    this.subjectReference = subjectReference;

    this.targetReference = targetReference;

    this.sovereigntyType = sovereigntyType;

    this.boundaryReference = boundaryReference;

    this.continuityReference = continuityReference;

    this.relationshipReferences = relationshipReferences;

    this.evidenceReference = evidenceReference;

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

  getResolutionDefinition() {
    return {
      subjectReference: this.subjectReference,
      targetReference: this.targetReference,
      sovereigntyType: this.sovereigntyType,
      boundaryReference: this.boundaryReference,
      continuityReference: this.continuityReference,
      relationshipReferences: this.relationshipReferences,
      evidenceReference: this.evidenceReference,
      state: this.state
    };
  }

  referencesSubject(subject) {
    return this.subjectReference === subject;
  }

  referencesTarget(target) {
    return this.targetReference === target;
  }

  matchesSovereigntyType(type) {
    return this.sovereigntyType === type;
  }

  referencesBoundary(boundary) {
    return this.boundaryReference === boundary;
  }

  referencesContinuity(reference) {
    return this.continuityReference === reference;
  }

  referencesRelationship(reference) {
    return this.relationshipReferences.includes(reference);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesBoundary() {
    return Boolean(this.boundaryReference);
  }

  hasResolutionBasis() {
    return Boolean(
      this.subjectReference &&
      this.boundaryReference
    );
  }

  transition(nextState) {
    if (!BRC_RESOLUTION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyResolution(config) {
  return new BRCSovereigntyResolution(config);
}
