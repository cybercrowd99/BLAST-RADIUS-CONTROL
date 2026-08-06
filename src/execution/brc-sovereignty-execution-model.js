/**
 * BRC Sovereignty Execution Model
 * 
 * Blast-Radius Control (BRC) defines execution as a sovereign structural
 * object representing a declared action occurrence operating within an
 * established enforcement boundary.
 *
 * Execution represents occurrence.
 *
 * Execution does not create authority.
 *
 * Execution does not create ownership.
 *
 * Execution does not define policy.
 *
 * Execution does not replace governance.
 *
 * Execution does not bypass boundaries.
 *
 * Execution sovereignty preserves:
 *
 * - Execution identity
 * - Subject reference
 * - Enforcement reference
 * - Action reference
 * - Actor reference
 * - Boundary reference
 * - Responsibility reference
 * - Authority reference
 * - Evidence relationship
 * - Continuity protection
 * - Execution state
 *
 * Execution is defined by:
 *
 * - What action occurred
 * - What subject was involved
 * - What enforcement structure permitted the occurrence
 * - What actor or component performed the action
 * - What boundary contained the execution
 * - What evidence records the occurrence
 * - What continuity preserves execution meaning
 * - What state the execution occupies
 *
 * This module defines execution sovereignty structure only.
 *
 * This module does not:
 * - Execute operations
 * - Trigger workflows
 * - Grant permissions
 * - Authenticate actors
 * - Modify objects
 * - Deploy systems
 * - Replace services
 * - Alter external systems
 *
 * Execution definition comes before execution runtime.
 */

export const BRC_SOVEREIGNTY_EXECUTION_TYPE =
  "BRC_SOVEREIGNTY_EXECUTION";

export const BRC_SOVEREIGNTY_EXECUTION_VERSION =
  "1.0.0";

export const BRC_EXECUTION_STATES = Object.freeze([
  "DECLARED",
  "PENDING",
  "STARTED",
  "COMPLETED",
  "FAILED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCSovereigntyExecution {
  constructor({
    id,
    subjectReference,
    enforcementReference = null,
    actionReference,
    actorReference = null,
    boundaryReference,
    responsibilityReference = null,
    authorityReference = null,
    evidenceReference = null,
    continuityReference = null,
    resultReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_SOVEREIGNTY_EXECUTION_TYPE;
    this.version = BRC_SOVEREIGNTY_EXECUTION_VERSION;

    this.id = id;

    this.subjectReference = subjectReference;

    this.enforcementReference = enforcementReference;

    this.actionReference = actionReference;

    this.actorReference = actorReference;

    this.boundaryReference = boundaryReference;

    this.responsibilityReference = responsibilityReference;

    this.authorityReference = authorityReference;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.resultReference = resultReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      actionReference: this.actionReference,
      state: this.state
    };
  }

  getExecutionDefinition() {
    return {
      subjectReference: this.subjectReference,
      enforcementReference: this.enforcementReference,
      actionReference: this.actionReference,
      actorReference: this.actorReference,
      boundaryReference: this.boundaryReference,
      responsibilityReference: this.responsibilityReference,
      authorityReference: this.authorityReference,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      resultReference: this.resultReference,
      state: this.state
    };
  }

  referencesSubject(subject) {
    return this.subjectReference === subject;
  }

  referencesEnforcement(enforcement) {
    return this.enforcementReference === enforcement;
  }

  referencesAction(action) {
    return this.actionReference === action;
  }

  referencesActor(actor) {
    return this.actorReference === actor;
  }

  referencesBoundary(boundary) {
    return this.boundaryReference === boundary;
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

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  preservesBoundary() {
    return Boolean(this.boundaryReference);
  }

  hasExecutionBasis() {
    return Boolean(
      this.subjectReference &&
      this.actionReference &&
      this.boundaryReference
    );
  }

  transition(nextState) {
    if (!BRC_EXECUTION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSovereigntyExecution(config) {
  return new BRCSovereigntyExecution(config);
}
