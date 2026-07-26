/**
 * BRC Event Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines events as sovereign structural objects
 * representing declared occurrences of movement, state transition, or change
 * within a contained system boundary.
 *
 * An event records that something occurred.
 *
 * An event does not create ownership.
 *
 * An event does not create authority.
 *
 * An event does not bypass boundaries.
 *
 * Event sovereignty preserves:
 *
 * - Event identity
 * - Source responsibility
 * - Authority ownership
 * - Boundary integrity
 * - Continuity reference
 * - Evidence preservation
 * - Controlled movement
 *
 * An event is defined by:
 *
 * - What occurred
 * - Where it originated
 * - Who is responsible
 * - What boundary contains it
 * - What movement it represents
 * - What continuity it references
 * - What evidence relationship exists
 *
 * This module defines event sovereignty structure only.
 *
 * This module does not:
 * - Emit events
 * - Process events
 * - Route events
 * - Execute workflows
 * - Trigger mutations
 * - Validate users
 * - Modify external systems
 *
 * Event definition comes before event enforcement.
 */

export const BRC_EVENT_SOVEREIGNTY_TYPE =
  "BRC_EVENT_SOVEREIGNTY";

export const BRC_EVENT_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_EVENT_STATES = Object.freeze([
  "DECLARED",
  "RECORDED",
  "VERIFIED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCEventSovereignty {
  constructor({
    id,
    type,
    source,
    responsibility,
    authority,
    boundary,
    movement = null,
    continuityReference = null,
    evidenceReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_EVENT_SOVEREIGNTY_TYPE;
    this.version = BRC_EVENT_SOVEREIGNTY_VERSION;

    this.id = id;

    this.eventType = type;

    this.source = source;

    this.responsibility = responsibility;
    this.authority = authority;

    this.boundary = boundary;

    this.movement = movement;

    this.continuityReference = continuityReference;
    this.evidenceReference = evidenceReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      eventType: this.eventType,
      state: this.state
    };
  }

  getEventDefinition() {
    return {
      eventType: this.eventType,
      source: this.source,
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      movement: this.movement,
      continuityReference: this.continuityReference,
      evidenceReference: this.evidenceReference,
      state: this.state
    };
  }

  belongsToSource(source) {
    return this.source === source;
  }

  hasResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  preservesAuthority(authority) {
    return this.authority === authority;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  preservesEvidence() {
    return Boolean(this.evidenceReference);
  }

  representsMovement(movement) {
    return this.movement === movement;
  }

  transition(nextState) {
    if (!BRC_EVENT_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCEventSovereignty(config) {
  return new BRCEventSovereignty(config);
}
