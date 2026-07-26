/**
 * BRC Access Boundary Model
 *
 * Blast-Radius Control (BRC) defines access as a controlled approach to a
 * declared boundary.
 *
 * Access permits interaction with a boundary.
 *
 * Access does not dissolve the boundary.
 *
 * Access does not create ownership.
 *
 * Access does not transfer authority.
 *
 * Access does not expose protected internal structure.
 *
 * Access boundary sovereignty preserves:
 *
 * - Access identity
 * - Request origin
 * - Target boundary
 * - Authority reference
 * - Allowed entry conditions
 * - Prohibited crossings
 * - Continuity protection
 * - Contained movement
 *
 * Access is defined by:
 *
 * - Who is requesting access
 * - What boundary is being approached
 * - Why access exists
 * - What movement is allowed
 * - What movement is prohibited
 * - What authority relationship applies
 * - What continuity reference is preserved
 *
 * This module defines access boundary structure only.
 *
 * This module does not:
 * - Authenticate users
 * - Grant permissions
 * - Open systems
 * - Route requests
 * - Execute actions
 * - Manage sessions
 * - Modify external systems
 *
 * Access definition comes before access enforcement.
 */

export const BRC_ACCESS_BOUNDARY_TYPE =
  "BRC_ACCESS_BOUNDARY";

export const BRC_ACCESS_BOUNDARY_VERSION =
  "1.0.0";

export const BRC_ACCESS_STATES = Object.freeze([
  "DECLARED",
  "REQUESTED",
  "ALLOWED",
  "RESTRICTED",
  "DENIED"
]);

export class BRCAccessBoundary {
  constructor({
    id,
    requester,
    targetBoundary,
    purpose,
    authorityReference = null,
    allowedEntry = [],
    prohibitedCrossings = [],
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_ACCESS_BOUNDARY_TYPE;
    this.version = BRC_ACCESS_BOUNDARY_VERSION;

    this.id = id;

    this.requester = requester;
    this.targetBoundary = targetBoundary;

    this.purpose = purpose;

    this.authorityReference = authorityReference;

    this.allowedEntry = allowedEntry;
    this.prohibitedCrossings = prohibitedCrossings;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      targetBoundary: this.targetBoundary,
      state: this.state
    };
  }

  getAccessDefinition() {
    return {
      requester: this.requester,
      targetBoundary: this.targetBoundary,
      purpose: this.purpose,
      authorityReference: this.authorityReference,
      allowedEntry: this.allowedEntry,
      prohibitedCrossings: this.prohibitedCrossings,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  targetsBoundary(boundary) {
    return this.targetBoundary === boundary;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  allowsEntry(action) {
    return this.allowedEntry.includes(action);
  }

  blocksCrossing(action) {
    return this.prohibitedCrossings.includes(action);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  transition(nextState) {
    if (!BRC_ACCESS_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCAccessBoundary(config) {
  return new BRCAccessBoundary(config);
}
