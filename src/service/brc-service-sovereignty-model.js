/**
 * BRC Service Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines services as sovereign behavioral
 * containers with declared responsibility, authority, continuity, and
 * communication boundaries.
 *
 * A service performs a defined responsibility.
 *
 * A service does not inherit ownership of another service's responsibility
 * through communication, dependency, or execution.
 *
 * Service sovereignty preserves:
 *
 * - Independent responsibility
 * - Declared authority
 * - Controlled behavior
 * - Protected continuity
 * - Defined interfaces
 * - Contained mutation
 *
 * A service is defined by:
 *
 * - What it does
 * - What it controls
 * - What it may receive
 * - What it may produce
 * - What it may not become
 *
 * This module defines service sovereignty structure only.
 *
 * This module does not:
 * - Execute services
 * - Route requests
 * - Manage deployments
 * - Authenticate users
 * - Grant permissions
 * - Modify external systems
 * - Transfer authority
 *
 * Service definition comes before service enforcement.
 */

export const BRC_SERVICE_SOVEREIGNTY_TYPE =
  "BRC_SERVICE_SOVEREIGNTY";

export const BRC_SERVICE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_SERVICE_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "SEALED"
]);

export class BRCServiceSovereignty {
  constructor({
    id,
    name,
    purpose,
    responsibility,
    authority,
    boundary,
    inputs = [],
    outputs = [],
    allowedDependencies = [],
    prohibitedDependencies = [],
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SERVICE_SOVEREIGNTY_TYPE;
    this.version = BRC_SERVICE_SOVEREIGNTY_VERSION;

    this.id = id;
    this.name = name;

    this.purpose = purpose;

    this.responsibility = responsibility;
    this.authority = authority;

    this.boundary = boundary;

    this.inputs = inputs;
    this.outputs = outputs;

    this.allowedDependencies = allowedDependencies;
    this.prohibitedDependencies = prohibitedDependencies;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      name: this.name,
      state: this.state
    };
  }

  getSovereigntyDefinition() {
    return {
      purpose: this.purpose,
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      inputs: this.inputs,
      outputs: this.outputs,
      allowedDependencies: this.allowedDependencies,
      prohibitedDependencies: this.prohibitedDependencies,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  ownsResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  controlsAuthority(authority) {
    return this.authority === authority;
  }

  acceptsInput(input) {
    return this.inputs.includes(input);
  }

  producesOutput(output) {
    return this.outputs.includes(output);
  }

  allowsDependency(dependency) {
    return this.allowedDependencies.includes(dependency);
  }

  blocksDependency(dependency) {
    return this.prohibitedDependencies.includes(dependency);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  transition(nextState) {
    if (!BRC_SERVICE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCServiceSovereignty(config) {
  return new BRCServiceSovereignty(config);
}
