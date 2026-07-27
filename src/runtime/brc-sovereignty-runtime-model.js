/**
 * BRC Sovereignty Runtime Model
 *
 * Blast-Radius Control (BRC) defines runtime as a sovereign structural object
 * representing the declared operational container where controlled execution
 * may occur within an established system boundary.
 *
 * Runtime represents operational context.
 *
 * Runtime does not create authority.
 *
 * Runtime does not create ownership.
 *
 * Runtime does not define policy.
 *
 * Runtime does not replace governance.
 *
 * Runtime does not bypass boundaries.
 *
 * Runtime sovereignty preserves:
 *
 * - Runtime identity
 * - Execution reference
 * - Lifecycle reference
 * - State reference
 * - Boundary reference
 * - Continuity reference
 * - Responsibility reference
 * - Authority reference
 * - Evidence relationship
 * - Runtime state
 *
 * Runtime is defined by:
 *
 * - What execution context exists
 * - What boundary contains the runtime
 * - What lifecycle governs continuity
 * - What state reference applies
 * - What execution relationship is represented
 * - What evidence supports runtime activity
 * - What continuity preserves runtime meaning
 *
 * This module defines runtime sovereignty structure only.
 *
 * This module does not:
 * - Execute code
 * - Run services
 * - Trigger workflows
 * - Manage infrastructure
 * - Modify state
 * - Deploy systems
 * - Grant permissions
 * - Alter external systems
 *
 * Runtime definition comes before runtime operation.
 */

export const BRC_SOVEREIGNTY_RUNTIME_TYPE =
  "BRC_SOVEREIGNTY_RUNTIME";

export const BRC_SOVEREIGNTY_RUNTIME_VERSION =
  "1.0.0";

export const BRC_RUNTIME_STATES = Object.freeze([
  "DECLARED",
  "INITIALIZED",
  "ACTIVE",
  "SUSPENDED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCSovereigntyRuntime {
  constructor({
    id,
    executionReference = null,
    lifecycleReference = null,
    stateReference = null,
    boundaryReference,
    continuityReference = null,
    responsibilityReference = null,
    authorityReference = null,
    evidenceReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_RUNTIME_TYPE;
    this.version = BRC_SOVEREIGNTY_RUNTIME_VERSION;

    this.id = id;

    this.executionReference = executionReference;

    this.lifecycleReference = lifecycleReference;

    this.stateReference = stateReference;

    this.boundaryReference = boundaryReference;

    this.continuityReference = continuityReference;

    this.responsibilityReference = responsibilityReference;

    this.authorityReference = authorityReference;

    this.evidenceReference = evidenceReference;

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

  getRuntimeDefinition() {
    return {
      executionReference: this.executionReference,
      lifecycleReference: this.lifecycleReference,
      stateReference: this.stateReference,
      boundaryReference: this.boundaryReference,
      continuityReference: this.continuityReference,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      evidenceReference: this.evidenceReference,
      state: this.state
    };
  }

  referencesExecution(execution) {
    return this.executionReference === execution;
  }

  referencesLifecycle(lifecycle) {
    return this.lifecycleReference === lifecycle;
  }

  referencesState(state) {
    return this.stateReference === state;
  }

  referencesBoundary(boundary) {
    return this.boundaryReference === boundary;
  }

  referencesContinuity(reference) {
    return this.continuityReference === reference;
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
    return Boolean(this.boundaryReference);
  }

  hasRuntimeBasis() {
    return Boolean(
      this.id &&
      this.boundaryReference
    );
  }

  transition(nextState) {
    if (!BRC_RUNTIME_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyRuntime(config) {
  return new BRCSovereigntyRuntime(config);
}
