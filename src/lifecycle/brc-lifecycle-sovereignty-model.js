/**
 * BRC Lifecycle Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines lifecycle as a sovereign structural
 * object representing the declared existence path, progression, and preserved
 * continuity of an object within a contained system boundary.
 *
 * Lifecycle represents controlled existence over time.
 *
 * Lifecycle does not create ownership.
 *
 * Lifecycle does not create authority.
 *
 * Lifecycle does not replace governance.
 *
 * Lifecycle does not bypass boundaries.
 *
 * Lifecycle sovereignty preserves:
 *
 * - Lifecycle identity
 * - Origin reference
 * - State relationship
 * - Transition relationship
 * - Responsibility relationship
 * - Authority reference
 * - Evidence relationship
 * - Continuity protection
 * - Boundary integrity
 *
 * Lifecycle is defined by:
 *
 * - What object lifecycle it represents
 * - Where the lifecycle begins
 * - What states are recognized
 * - What transitions are declared
 * - Who holds responsibility
 * - What authority relationship applies
 * - What evidence supports lifecycle meaning
 * - What continuity preserves the progression
 *
 * This module defines lifecycle sovereignty structure only.
 *
 * This module does not:
 * - Execute workflows
 * - Trigger transitions
 * - Perform migrations
 * - Modify state
 * - Manage deployments
 * - Approve changes
 * - Resolve conflicts
 * - Modify external systems
 *
 * Lifecycle definition comes before lifecycle enforcement.
 */

export const BRC_LIFECYCLE_SOVEREIGNTY_TYPE =
  "BRC_LIFECYCLE_SOVEREIGNTY";

export const BRC_LIFECYCLE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_LIFECYCLE_STATES = Object.freeze([
  "CREATED",
  "ACTIVE",
  "TRANSITIONING",
  "MATURE",
  "SEALED",
  "ARCHIVED"
]);

export class BRCLifecycleSovereignty {
  constructor({
    id,
    lifecycleType,
    originReference = null,
    stateReference = null,
    transitionReference = null,
    responsibilityReference = null,
    authorityReference = null,
    boundary,
    evidenceReference = null,
    continuityReference = null,
    state = "CREATED"
  }) {
    this.type = BRC_LIFECYCLE_SOVEREIGNTY_TYPE;
    this.version = BRC_LIFECYCLE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.lifecycleType = lifecycleType;

    this.originReference = originReference;

    this.stateReference = stateReference;

    this.transitionReference = transitionReference;

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
      lifecycleType: this.lifecycleType,
      state: this.state
    };
  }

  getLifecycleDefinition() {
    return {
      lifecycleType: this.lifecycleType,
      originReference: this.originReference,
      stateReference: this.stateReference,
      transitionReference: this.transitionReference,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesOrigin(origin) {
    return this.originReference === origin;
  }

  referencesState(state) {
    return this.stateReference === state;
  }

  referencesTransition(transition) {
    return this.transitionReference === transition;
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
    if (!BRC_LIFECYCLE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCLifecycleSovereignty(config) {
  return new BRCLifecycleSovereignty(config);
}
