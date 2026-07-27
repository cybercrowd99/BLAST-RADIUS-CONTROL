/**
 * BRC Sovereignty Registry Model
 *
 * Blast-Radius Control (BRC) defines a sovereignty registry as a sovereign
 * structural object responsible for preserving declared references to
 * sovereignty-defined objects within a contained system boundary.
 *
 * The registry represents declaration presence.
 *
 * The registry does not create ownership.
 *
 * The registry does not create authority.
 *
 * The registry does not enforce permissions.
 *
 * The registry does not resolve behavior.
 *
 * The registry does not bypass boundaries.
 *
 * Registry sovereignty preserves:
 *
 * - Registry identity
 * - Registered object identity
 * - Sovereignty type reference
 * - Boundary reference
 * - Continuity reference
 * - Relationship references
 * - State reference
 * - Evidence reference
 * - Declaration integrity
 *
 * A registry entry is defined by:
 *
 * - What object is registered
 * - What sovereignty type it represents
 * - What boundary contains it
 * - What continuity preserves it
 * - What relationships reference it
 * - What evidence supports the declaration
 * - What state the declaration occupies
 *
 * This module defines registry structure only.
 *
 * This module does not:
 * - Execute services
 * - Grant authority
 * - Validate permissions
 * - Resolve dependencies
 * - Enforce policies
 * - Modify external systems
 * - Manage deployments
 *
 * Registry definition comes before registry enforcement.
 */

export const BRC_SOVEREIGNTY_REGISTRY_TYPE =
  "BRC_SOVEREIGNTY_REGISTRY";

export const BRC_SOVEREIGNTY_REGISTRY_VERSION =
  "1.0.0";

export const BRC_REGISTRY_STATES = Object.freeze([
  "DECLARED",
  "REGISTERED",
  "REFERENCED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCSovereigntyRegistry {
  constructor({
    id,
    objectReference,
    sovereigntyType,
    boundaryReference,
    continuityReference = null,
    relationshipReferences = [],
    evidenceReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_REGISTRY_TYPE;
    this.version = BRC_SOVEREIGNTY_REGISTRY_VERSION;

    this.id = id;

    this.objectReference = objectReference;

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

  getRegistryDefinition() {
    return {
      objectReference: this.objectReference,
      sovereigntyType: this.sovereigntyType,
      boundaryReference: this.boundaryReference,
      continuityReference: this.continuityReference,
      relationshipReferences: this.relationshipReferences,
      evidenceReference: this.evidenceReference,
      state: this.state
    };
  }

  referencesObject(objectReference) {
    return this.objectReference === objectReference;
  }

  isSovereigntyType(type) {
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

  preservesDeclaration() {
    return Boolean(this.objectReference && this.sovereigntyType);
  }

  transition(nextState) {
    if (!BRC_REGISTRY_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyRegistry(config) {
  return new BRCSovereigntyRegistry(config);
}
