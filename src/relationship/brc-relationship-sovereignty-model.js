/**
 * BRC Relationship Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines relationships as sovereign structural
 * objects representing declared connections between contained sovereign
 * objects, components, services, or boundaries.
 *
 * A relationship represents connection.
 *
 * A relationship does not create ownership.
 *
 * A relationship does not create authority.
 *
 * A relationship does not create dependency inheritance.
 *
 * A relationship does not bypass boundaries.
 *
 * Relationship sovereignty preserves:
 *
 * - Relationship identity
 * - Relationship type
 * - Source reference
 * - Target reference
 * - Responsibility relationship
 * - Authority relationship
 * - Boundary integrity
 * - Evidence relationship
 * - Continuity protection
 * - Controlled movement
 *
 * A relationship is defined by:
 *
 * - What objects are connected
 * - Why the relationship exists
 * - What type of relationship is declared
 * - What responsibility applies
 * - What authority relationship applies
 * - What boundary contains the relationship
 * - What evidence supports the relationship
 * - What continuity preserves the relationship meaning
 *
 * This module defines relationship sovereignty structure only.
 *
 * This module does not:
 * - Create ownership
 * - Grant authority
 * - Resolve dependencies
 * - Execute workflows
 * - Route communication
 * - Modify external systems
 * - Transfer responsibility
 *
 * Relationship definition comes before relationship enforcement.
 */

export const BRC_RELATIONSHIP_SOVEREIGNTY_TYPE =
  "BRC_RELATIONSHIP_SOVEREIGNTY";

export const BRC_RELATIONSHIP_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_RELATIONSHIP_TYPES = Object.freeze([
  "ASSOCIATION",
  "REFERENCE",
  "CONTAINMENT",
  "DEPENDENCY",
  "PARTICIPATION",
  "OWNERSHIP_REFERENCE",
  "AUTHORITY_REFERENCE"
]);

export const BRC_RELATIONSHIP_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCRelationshipSovereignty {
  constructor({
    id,
    relationshipType,
    sourceReference,
    targetReference,
    responsibilityReference = null,
    authorityReference = null,
    boundary,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_RELATIONSHIP_SOVEREIGNTY_TYPE;
    this.version = BRC_RELATIONSHIP_SOVEREIGNTY_VERSION;

    this.id = id;

    this.relationshipType = relationshipType;

    this.sourceReference = sourceReference;

    this.targetReference = targetReference;

    this.responsibilityReference = responsibilityReference;

    this.authorityReference = authorityReference;

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
      relationshipType: this.relationshipType,
      state: this.state
    };
  }

  getRelationshipDefinition() {
    return {
      relationshipType: this.relationshipType,
      sourceReference: this.sourceReference,
      targetReference: this.targetReference,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  isType(type) {
    return this.relationshipType === type;
  }

  connectsSource(source) {
    return this.sourceReference === source;
  }

  connectsTarget(target) {
    return this.targetReference === target;
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReference === responsibility;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
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
    if (!BRC_RELATIONSHIP_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCRelationshipSovereignty(config) {
  return new BRCRelationshipSovereignty(config);
}
