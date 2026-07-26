/**
 * BRC Authority Model
 *
 * Blast-Radius Control (BRC) defines authority as a contained responsibility
 * assigned to a specific system component.
 *
 * Authority belongs to an owner.
 *
 * Authority cannot:
 * - Drift across boundaries
 * - Transfer without declaration
 * - Be inherited without permission
 * - Replace another component's responsibility
 *
 * This module defines authority structure only.
 *
 * This module does not:
 * - Grant permissions
 * - Execute actions
 * - Validate users
 * - Route requests
 * - Modify records
 * - Enforce security policies
 *
 * Authority definition comes before authority enforcement.
 */

export const BRC_AUTHORITY_TYPE = "BRC_AUTHORITY";

export const BRC_AUTHORITY_VERSION = "1.0.0";

export class BRCAuthority {
  constructor({
    id,
    owner,
    scope,
    responsibility,
    boundary,
    permissions = [],
    restrictions = [],
    continuity = null
  }) {
    this.type = BRC_AUTHORITY_TYPE;
    this.version = BRC_AUTHORITY_VERSION;

    this.id = id;

    this.owner = owner;
    this.scope = scope;

    this.responsibility = responsibility;
    this.boundary = boundary;

    this.permissions = permissions;
    this.restrictions = restrictions;

    this.continuity = continuity;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      owner: this.owner
    };
  }

  getAuthorityDefinition() {
    return {
      scope: this.scope,
      responsibility: this.responsibility,
      boundary: this.boundary,
      permissions: this.permissions,
      restrictions: this.restrictions,
      continuity: this.continuity
    };
  }

  ownsResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  containsScope(scope) {
    return this.scope === scope;
  }

  allows(action) {
    return this.permissions.includes(action);
  }

  restricts(action) {
    return this.restrictions.includes(action);
  }

  canTransferTo(targetAuthority) {
    return (
      targetAuthority &&
      targetAuthority.boundary === this.boundary
    );
  }
}

export function createBRCAuthority(config) {
  return new BRCAuthority(config);
}
