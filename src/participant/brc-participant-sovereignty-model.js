/**
 * BRC Participant Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines participants as sovereign structural
 * objects representing declared entities involved in contained system
 * relationships.
 *
 * A participant represents involvement.
 *
 * A participant does not create identity ownership.
 *
 * A participant does not create authority.
 *
 * A participant does not bypass boundaries.
 *
 * A participant does not inherit responsibility without declaration.
 *
 * Participant sovereignty preserves:
 *
 * - Participant identity reference
 * - Responsibility relationship
 * - Authority relationship
 * - Boundary relationship
 * - Participation scope
 * - Continuity protection
 * - Evidence relationship
 * - Controlled movement
 *
 * A participant is defined by:
 *
 * - What entity is participating
 * - What responsibility is declared
 * - What authority reference applies
 * - What boundaries contain participation
 * - What interactions are allowed
 * - What interactions are prohibited
 * - What continuity preserves the relationship
 * - What evidence supports participation
 *
 * This module defines participant sovereignty structure only.
 *
 * This module does not:
 * - Create accounts
 * - Authenticate users
 * - Verify identity
 * - Grant permissions
 * - Manage profiles
 * - Create organizations
 * - Execute transactions
 * - Modify external systems
 *
 * Participant definition comes before participant enforcement.
 */

export const BRC_PARTICIPANT_SOVEREIGNTY_TYPE =
  "BRC_PARTICIPANT_SOVEREIGNTY";

export const BRC_PARTICIPANT_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_PARTICIPANT_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCParticipantSovereignty {
  constructor({
    id,
    participantType,
    identityReference,
    responsibility = null,
    authorityReference = null,
    boundary,
    participationScope = [],
    allowedMovement = [],
    prohibitedMovement = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_PARTICIPANT_SOVEREIGNTY_TYPE;
    this.version = BRC_PARTICIPANT_SOVEREIGNTY_VERSION;

    this.id = id;

    this.participantType = participantType;

    this.identityReference = identityReference;

    this.responsibility = responsibility;

    this.authorityReference = authorityReference;

    this.boundary = boundary;

    this.participationScope = participationScope;

    this.allowedMovement = allowedMovement;

    this.prohibitedMovement = prohibitedMovement;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      participantType: this.participantType,
      state: this.state
    };
  }

  getParticipantDefinition() {
    return {
      participantType: this.participantType,
      identityReference: this.identityReference,
      responsibility: this.responsibility,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      participationScope: this.participationScope,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesIdentity(identity) {
    return this.identityReference === identity;
  }

  ownsResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  allowsParticipation(scope) {
    return this.participationScope.includes(scope);
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  blocksMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    if (!BRC_PARTICIPANT_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCParticipantSovereignty(config) {
  return new BRCParticipantSovereignty(config);
}
