/**
 * BRC Evidence Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines evidence as a sovereign structural
 * object that preserves proof relationships, origin references, state, and
 * continuity within a contained system boundary.
 *
 * Evidence represents verification support.
 *
 * Evidence does not create authority.
 *
 * Evidence does not replace ownership.
 *
 * Evidence does not alter history.
 *
 * Evidence does not bypass boundaries.
 *
 * Evidence sovereignty preserves:
 *
 * - Evidence identity
 * - Source origin
 * - Responsibility reference
 * - Authority relationship
 * - Boundary integrity
 * - Continuity protection
 * - Record relationship
 * - Structural integrity
 *
 * Evidence is defined by:
 *
 * - What it proves
 * - Where it originated
 * - What it references
 * - Who is responsible for it
 * - What boundary contains it
 * - How continuity is preserved
 * - What state it maintains
 *
 * This module defines evidence sovereignty structure only.
 *
 * This module does not:
 * - Collect evidence
 * - Validate evidence
 * - Store evidence
 * - Certify claims
 * - Resolve disputes
 * - Modify records
 * - Grant authority
 * - Execute workflows
 *
 * Evidence definition comes before evidence enforcement.
 */

export const BRC_EVIDENCE_SOVEREIGNTY_TYPE =
  "BRC_EVIDENCE_SOVEREIGNTY";

export const BRC_EVIDENCE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_EVIDENCE_STATES = Object.freeze([
  "DECLARED",
  "CAPTURED",
  "VERIFIED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCEvidenceSovereignty {
  constructor({
    id,
    evidenceType,
    source,
    owner,
    responsibility,
    authority,
    boundary,
    recordReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_EVIDENCE_SOVEREIGNTY_TYPE;
    this.version = BRC_EVIDENCE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.evidenceType = evidenceType;

    this.source = source;

    this.owner = owner;
    this.responsibility = responsibility;
    this.authority = authority;

    this.boundary = boundary;

    this.recordReference = recordReference;
    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      evidenceType: this.evidenceType,
      state: this.state
    };
  }

  getEvidenceDefinition() {
    return {
      evidenceType: this.evidenceType,
      source: this.source,
      owner: this.owner,
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      recordReference: this.recordReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  belongsToSource(source) {
    return this.source === source;
  }

  belongsToOwner(owner) {
    return this.owner === owner;
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

  referencesRecord(recordReference) {
    return this.recordReference === recordReference;
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  transition(nextState) {
    if (!BRC_EVIDENCE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCEvidenceSovereignty(config) {
  return new BRCEvidenceSovereignty(config);
}
