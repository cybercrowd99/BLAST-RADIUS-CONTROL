/**
 * BRC Sovereignty Coordination Model
 * 
 * Blast-Radius Control (BRC) defines coordination as a sovereign structural
 * object representing declared alignment relationships between sovereignty-
 * defined objects, components, services, or boundaries within a contained
 * system boundary.
 *
 * Coordination represents organized relationship alignment.
 *
 * Coordination does not create authority.
 *
 * Coordination does not create ownership.
 *
 * Coordination does not replace governance.
 *
 * Coordination does not execute workflows.
 *
 * Coordination does not bypass boundaries.
 *
 * Coordination sovereignty preserves:
 *
 * - Coordination identity
 * - Source reference
 * - Target references
 * - Relationship references
 * - Responsibility references
 * - Authority references
 * - Boundary integrity
 * - Evidence relationship
 * - Continuity protection
 * - Coordination state
 *
 * Coordination is defined by:
 *
 * - What structures are being aligned
 * - What relationship requires coordination
 * - What responsibilities participate
 * - What authority references apply
 * - What boundary contains the coordination
 * - What evidence supports the coordination
 * - What continuity preserves coordination meaning
 * - What state the coordination occupies
 *
 * This module defines coordination sovereignty structure only.
 *
 * This module does not:
 * - Execute workflows
 * - Schedule operations
 * - Make decisions
 * - Grant permissions
 * - Route services
 * - Modify objects
 * - Resolve disputes
 * - Alter external systems
 *
 * Coordination definition comes before coordination execution.
 */

export const BRC_SOVEREIGNTY_COORDINATION_TYPE =
  "BRC_SOVEREIGNTY_COORDINATION";

export const BRC_SOVEREIGNTY_COORDINATION_VERSION =
  "1.0.0";

export const BRC_COORDINATION_STATES = Object.freeze([
  "DECLARED",
  "ALIGNED",
  "ACTIVE",
  "PAUSED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCSovereigntyCoordination {
  constructor({
    id,
    sourceReference,
    targetReferences = [],
    relationshipReferences = [],
    responsibilityReferences = [],
    authorityReferences = [],
    boundaryReference,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_COORDINATION_TYPE;
    this.version = BRC_SOVEREIGNTY_COORDINATION_VERSION;

    this.id = id;

    this.sourceReference = sourceReference;

    this.targetReferences = targetReferences;

    this.relationshipReferences = relationshipReferences;

    this.responsibilityReferences = responsibilityReferences;

    this.authorityReferences = authorityReferences;

    this.boundaryReference = boundaryReference;

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

  getCoordinationDefinition() {
    return {
      sourceReference: this.sourceReference,
      targetReferences: this.targetReferences,
      relationshipReferences: this.relationshipReferences,
      responsibilityReferences: this.responsibilityReferences,
      authorityReferences: this.authorityReferences,
      boundaryReference: this.boundaryReference,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesSource(source) {
    return this.sourceReference === source;
  }

  referencesTarget(target) {
    return this.targetReferences.includes(target);
  }

  referencesRelationship(relationship) {
    return this.relationshipReferences.includes(relationship);
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReferences.includes(responsibility);
  }

  referencesAuthority(authority) {
    return this.authorityReferences.includes(authority);
  }

  referencesBoundary(boundary) {
    return this.boundaryReference === boundary;
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

  hasCoordinationBasis() {
    return Boolean(
      this.sourceReference &&
      this.boundaryReference
    );
  }

  transition(nextState) {
    if (!BRC_COORDINATION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyCoordination(config) {
  return new BRCSovereigntyCoordination(config);
}
