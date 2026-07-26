/**
 * BRC Role Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines roles as sovereign structural objects
 * representing declared responsibility positions held by participants within
 * a contained system boundary.
 *
 * A role represents responsibility placement.
 *
 * A role does not create identity.
 *
 * A role does not create ownership.
 *
 * A role does not create authority.
 *
 * A role does not grant permissions.
 *
 * A role does not bypass boundaries.
 *
 * Role sovereignty preserves:
 *
 * - Role identity
 * - Responsibility definition
 * - Participant relationship
 * - Authority reference
 * - Boundary relationship
 * - Scope definition
 * - Continuity protection
 * - Evidence relationship
 * - Controlled movement
 *
 * A role is defined by:
 *
 * - What responsibility it represents
 * - Who may hold the role
 * - What authority relationship applies
 * - What boundary contains the role
 * - What scope the role operates within
 * - What movement is allowed
 * - What movement is prohibited
 * - What continuity preserves the relationship
 * - What evidence supports the role
 *
 * This module defines role sovereignty structure only.
 *
 * This module does not:
 * - Assign roles
 * - Manage users
 * - Grant permissions
 * - Authenticate participants
 * - Create organizations
 * - Execute workflows
 * - Enforce access control
 * - Modify external systems
 *
 * Role definition comes before role enforcement.
 */

export const BRC_ROLE_SOVEREIGNTY_TYPE =
  "BRC_ROLE_SOVEREIGNTY";

export const BRC_ROLE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_ROLE_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCRoleSovereignty {
  constructor({
    id,
    roleType,
    responsibility,
    participantReference = null,
    authorityReference = null,
    boundary,
    scope = [],
    allowedMovement = [],
    prohibitedMovement = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_ROLE_SOVEREIGNTY_TYPE;
    this.version = BRC_ROLE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.roleType = roleType;

    this.responsibility = responsibility;

    this.participantReference = participantReference;

    this.authorityReference = authorityReference;

    this.boundary = boundary;

    this.scope = scope;

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
      roleType: this.roleType,
      state: this.state
    };
  }

  getRoleDefinition() {
    return {
      roleType: this.roleType,
      responsibility: this.responsibility,
      participantReference: this.participantReference,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      scope: this.scope,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesParticipant(participant) {
    return this.participantReference === participant;
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

  includesScope(scope) {
    return this.scope.includes(scope);
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
    if (!BRC_ROLE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCRoleSovereignty(config) {
  return new BRCRoleSovereignty(config);
}
