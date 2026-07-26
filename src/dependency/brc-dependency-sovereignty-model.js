/**
 * BRC Dependency Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines dependencies as declared relationships
 * between sovereign components.
 *
 * A dependency provides connection.
 *
 * A dependency does not provide ownership.
 *
 * A dependency does not inherit authority.
 *
 * A dependency does not expand beyond its declared responsibility.
 *
 * Dependency sovereignty preserves:
 *
 * - Declared relationships
 * - Controlled expansion
 * - Authority separation
 * - Boundary integrity
 * - Continuity protection
 * - Contained movement
 *
 * A dependency is defined by:
 *
 * - Who depends
 * - What is depended upon
 * - Why the dependency exists
 * - What movement is allowed
 * - What movement is prohibited
 * - What authority remains separate
 *
 * This module defines dependency sovereignty structure only.
 *
 * This module does not:
 * - Resolve packages
 * - Load dependencies
 * - Install software
 * - Execute services
 * - Manage deployments
 * - Grant authority
 * - Modify external systems
 *
 * Dependency definition comes before dependency enforcement.
 */

export const BRC_DEPENDENCY_SOVEREIGNTY_TYPE =
  "BRC_DEPENDENCY_SOVEREIGNTY";

export const BRC_DEPENDENCY_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_DEPENDENCY_STATES = Object.freeze([
  "DECLARED",
  "APPROVED",
  "ACTIVE",
  "RESTRICTED",
  "REVOKED"
]);

export class BRCDependencySovereignty {
  constructor({
    id,
    source,
    target,
    purpose,
    allowedMovement = [],
    prohibitedMovement = [],
    authorityOwner = null,
    boundaryReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_DEPENDENCY_SOVEREIGNTY_TYPE;
    this.version = BRC_DEPENDENCY_SOVEREIGNTY_VERSION;

    this.id = id;

    this.source = source;
    this.target = target;

    this.purpose = purpose;

    this.allowedMovement = allowedMovement;
    this.prohibitedMovement = prohibitedMovement;

    this.authorityOwner = authorityOwner;

    this.boundaryReference = boundaryReference;
    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      source: this.source,
      target: this.target,
      state: this.state
    };
  }

  getDependencyDefinition() {
    return {
      source: this.source,
      target: this.target,
      purpose: this.purpose,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      authorityOwner: this.authorityOwner,
      boundaryReference: this.boundaryReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  blocksMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  preservesAuthority(owner) {
    return this.authorityOwner === owner;
  }

  preservesBoundary() {
    return Boolean(this.boundaryReference);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  transition(nextState) {
    if (!BRC_DEPENDENCY_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCDependencySovereignty(config) {
  return new BRCDependencySovereignty(config);
}
