/**
 * BRC Permission Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines permissions as sovereign structural
 * objects representing declared allowances for movement within a contained
 * system boundary.
 *
 * A permission represents declared allowance.
 *
 * A permission does not create authority.
 *
 * A permission does not create ownership.
 *
 * A permission does not create identity.
 *
 * A permission does not bypass boundaries.
 *
 * A permission does not expand responsibility beyond declaration.
 *
 * Permission sovereignty preserves:
 *
 * - Permission identity
 * - Authority relationship
 * - Role relationship
 * - Participant relationship
 * - Boundary integrity
 * - Allowed movement
 * - Prohibited movement
 * - Evidence relationship
 * - Continuity protection
 *
 * A permission is defined by:
 *
 * - What movement is allowed
 * - Who owns the authority relationship
 * - What role relationship applies
 * - What participant relationship applies
 * - What boundary contains the permission
 * - What actions are prohibited
 * - What evidence supports the permission
 * - What continuity preserves the relationship
 *
 * This module defines permission sovereignty structure only.
 *
 * This module does not:
 * - Grant permissions
 * - Authenticate users
 * - Authorize requests
 * - Execute access decisions
 * - Manage sessions
 * - Control applications
 * - Replace security systems
 * - Modify external systems
 *
 * Permission definition comes before permission enforcement.
 */

export const BRC_PERMISSION_SOVEREIGNTY_TYPE =
  "BRC_PERMISSION_SOVEREIGNTY";

export const BRC_PERMISSION_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_PERMISSION_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "REVOKED",
  "ARCHIVED"
]);

export class BRCPermissionSovereignty {
  constructor({
    id,
    permissionType,
    authorityReference = null,
    roleReference = null,
    participantReference = null,
    boundary,
    allowedMovement = [],
    prohibitedMovement = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_PERMISSION_SOVEREIGNTY_TYPE;
    this.version = BRC_PERMISSION_SOVEREIGNTY_VERSION;

    this.id = id;

    this.permissionType = permissionType;

    this.authorityReference = authorityReference;

    this.roleReference = roleReference;

    this.participantReference = participantReference;

    this.boundary = boundary;

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
      permissionType: this.permissionType,
      state: this.state
    };
  }

  getPermissionDefinition() {
    return {
      permissionType: this.permissionType,
      authorityReference: this.authorityReference,
      roleReference: this.roleReference,
      participantReference: this.participantReference,
      boundary: this.boundary,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  referencesRole(role) {
    return this.roleReference === role;
  }

  referencesParticipant(participant) {
    return this.participantReference === participant;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
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
    if (!BRC_PERMISSION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCPermissionSovereignty(config) {
  return new BRCPermissionSovereignty(config);
}
