/**
 * BRC Interaction Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines interaction as a sovereign structural
 * object representing declared, contained, non-authoritative relationships
 * between components, services, lifecycles, or boundaries.
 *
 * Interaction is not execution.
 * Interaction is not authority.
 * Interaction is not dependency inheritance.
 *
 * Interaction sovereignty preserves:
 *
 * - Declared interaction identity
 * - Interaction type
 * - Interaction direction
 * - Interaction participants
 * - Interaction boundary
 * - Interaction responsibility
 * - Interaction authority reference
 * - Interaction evidence reference
 * - Interaction continuity
 *
 * Interaction is defined by:
 *
 * - Who is interacting
 * - What the interaction represents
 * - What direction the interaction moves
 * - What boundary the interaction must respect
 * - What responsibility applies
 * - What authority relationship applies
 * - What evidence supports the interaction
 * - What continuity preserves the interaction meaning
 *
 * This module defines interaction sovereignty structure only.
 *
 * This module does not:
 * - Execute interactions
 * - Trigger workflows
 * - Transfer authority
 * - Rewrite boundaries
 * - Modify external systems
 * - Perform routing
 * - Approve or deny behavior
 *
 * Interaction definition comes before interaction enforcement.
 */

export const BRC_INTERACTION_SOVEREIGNTY_TYPE =
  "BRC_INTERACTION_SOVEREIGNTY";

export const BRC_INTERACTION_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_INTERACTION_TYPES = Object.freeze([
  "REQUEST",
  "RESPONSE",
  "OBSERVATION",
  "REFERENCE",
  "LINKAGE",
  "NOTIFICATION"
]);

export const BRC_INTERACTION_DIRECTIONS = Object.freeze([
  "INBOUND",
  "OUTBOUND",
  "LATERAL",
  "CROSS_BOUNDARY"
]);

export class BRCInteractionSovereignty {
  constructor({
    id,
    interactionType,
    direction,
    source,
    target,
    boundary,
    responsibilityReference = null,
    authorityReference = null,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_INTERACTION_SOVEREIGNTY_TYPE;
    this.version = BRC_INTERACTION_SOVEREIGNTY_VERSION;

    this.id = id;

    this.interactionType = interactionType;
    this.direction = direction;

    this.source = source;
    this.target = target;

    this.boundary = boundary;

    this.responsibilityReference = responsibilityReference;
    this.authorityReference = authorityReference;

    this.evidenceReference = evidenceReference;
    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      interactionType: this.interactionType,
      direction: this.direction,
      state: this.state
    };
  }

  getInteractionDefinition() {
    return {
      interactionType: this.interactionType,
      direction: this.direction,
      source: this.source,
      target: this.target,
      boundary: this.boundary,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  isType(type) {
    return this.interactionType === type;
  }

  isDirection(dir) {
    return this.direction === dir;
  }

  referencesResponsibility(responsibility) {
    return this.responsibilityReference === responsibility;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    const allowedStates = [
      "DECLARED",
      "ACTIVE",
      "SEALED"
    ];

    if (!allowedStates.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCInteractionSovereignty(config) {
  return new BRCInteractionSovereignty(config);
}
