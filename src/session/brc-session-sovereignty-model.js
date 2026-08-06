/**
 * BRC Session Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines sessions as sovereign structural objects
 * representing a controlled continuity relationship between a requester and a
 * declared system boundary.
 *
 * A session represents an interaction period.
 *
 * A session does not create identity.
 *
 * A session does not create ownership.
 *
 * A session does not transfer authority.
 *
 * A session does not bypass boundaries.
 *
 * Session sovereignty preserves:
 *
 * - Session identity
 * - Request origin
 * - Boundary relationship
 * - Authority reference
 * - Continuity state
 * - Controlled movement
 * - Expiration awareness
 *
 * A session is defined by:
 *
 * - Who initiated the interaction
 * - What boundary is being accessed
 * - What authority relationship applies
 * - What continuity reference is maintained
 * - What state the interaction occupies
 * - What limits contain the interaction
 *
 * This module defines session sovereignty structure only.
 *
 * This module does not:
 * - Authenticate users
 * - Create accounts
 * - Issue credentials
 * - Manage cookies
 * - Store sessions
 * - Route requests
 * - Execute actions
 * - Grant permissions
 * - Modify external systems
 *
 * Session definition comes before session enforcement.
 */

export const BRC_SESSION_SOVEREIGNTY_TYPE =
  "BRC_SESSION_SOVEREIGNTY";

export const BRC_SESSION_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_SESSION_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "SUSPENDED",
  "EXPIRED",
  "SEALED"
]);

export class BRCSessionSovereignty {
  constructor({
    id,
    requester,
    boundary,
    authorityReference = null,
    continuityReference = null,
    allowedMovement = [],
    prohibitedMovement = [],
    state = "DECLARED"
  }) {
    this.type = BRC_SESSION_SOVEREIGNTY_TYPE;
    this.version = BRC_SESSION_SOVEREIGNTY_VERSION;

    this.id = id;

    this.requester = requester;

    this.boundary = boundary;

    this.authorityReference = authorityReference;

    this.continuityReference = continuityReference;

    this.allowedMovement = allowedMovement;
    this.prohibitedMovement = prohibitedMovement;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      boundary: this.boundary,
      state: this.state
    };
  }

  getSessionDefinition() {
    return {
      requester: this.requester,
      boundary: this.boundary,
      authorityReference: this.authorityReference,
      continuityReference: this.continuityReference,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      state: this.state
    };
  }

  belongsToRequester(requester) {
    return this.requester === requester;
  }

  targetsBoundary(boundary) {
    return this.boundary === boundary;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  blocksMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  transition(nextState) {
    if (!BRC_SESSION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCSessionSovereignty(config) {
  return new BRCSessionSovereignty(config);
}
