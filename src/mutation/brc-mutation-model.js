/**
 * BRC Mutation Model
 *
 * Blast-Radius Control (BRC) defines mutation as any change that modifies
 * state, structure, behavior, dependency, or authority within a system.
 *
 * Mutation is not forbidden.
 *
 * Mutation must remain:
 * - Declared
 * - Local
 * - Predictable
 * - Contained
 *
 * A mutation that exceeds its declared boundary becomes uncontrolled movement.
 *
 * This module defines mutation structure only.
 *
 * This module does not:
 * - Execute mutations
 * - Approve changes
 * - Modify system state
 * - Perform migrations
 * - Enforce permissions
 * - Manage deployments
 *
 * Mutation definition comes before mutation enforcement.
 */

export const BRC_MUTATION_TYPE = "BRC_MUTATION";

export const BRC_MUTATION_VERSION = "1.0.0";

export const BRC_MUTATION_STATES = Object.freeze([
  "DECLARED",
  "CONTAINED",
  "REVIEWED",
  "COMPLETED",
  "REJECTED"
]);

export class BRCMutation {
  constructor({
    id,
    source,
    target,
    boundary,
    authority,
    changeType,
    state = "DECLARED",
    radius = null,
    continuity = null
  }) {
    this.type = BRC_MUTATION_TYPE;
    this.version = BRC_MUTATION_VERSION;

    this.id = id;

    this.source = source;
    this.target = target;

    this.boundary = boundary;
    this.authority = authority;

    this.changeType = changeType;

    this.state = state;
    this.radius = radius;

    this.continuity = continuity;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      changeType: this.changeType,
      state: this.state
    };
  }

  getMutationDefinition() {
    return {
      source: this.source,
      target: this.target,
      boundary: this.boundary,
      authority: this.authority,
      changeType: this.changeType,
      state: this.state,
      radius: this.radius,
      continuity: this.continuity
    };
  }

  isContained() {
    return this.state === "CONTAINED";
  }

  isDeclared() {
    return this.state === "DECLARED";
  }

  exceedsBoundary(targetBoundary) {
    return this.boundary !== targetBoundary;
  }

  requiresReview() {
    return (
      this.state === "DECLARED" ||
      this.state === "REVIEWED"
    );
  }

  transition(nextState) {
    if (!BRC_MUTATION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCMutation(config) {
  return new BRCMutation(config);
}
