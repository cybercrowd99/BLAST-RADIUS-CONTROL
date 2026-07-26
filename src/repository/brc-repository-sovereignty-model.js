/**
 * BRC Repository Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines repositories as sovereign structural
 * containers with declared responsibility, authority, continuity, and
 * communication boundaries.
 *
 * A repository may communicate with another repository.
 *
 * Communication does not dissolve sovereignty.
 *
 * Repository sovereignty preserves:
 *
 * - Independent responsibility
 * - Declared authority
 * - Contained mutation
 * - Protected continuity
 * - Controlled interfaces
 *
 * A repository is not defined only by its files.
 *
 * A repository is defined by:
 *
 * - What it owns
 * - What it controls
 * - What it may change
 * - What it may expose
 * - What it may not become
 *
 * This module defines repository sovereignty structure only.
 *
 * This module does not:
 * - Manage Git operations
 * - Control deployments
 * - Enforce access permissions
 * - Merge repositories
 * - Transfer ownership
 * - Modify external systems
 *
 * Repository definition comes before repository enforcement.
 */

export const BRC_REPOSITORY_SOVEREIGNTY_TYPE =
  "BRC_REPOSITORY_SOVEREIGNTY";

export const BRC_REPOSITORY_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_REPOSITORY_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "ARCHIVED",
  "SEALED"
]);

export class BRCRepositorySovereignty {
  constructor({
    id,
    name,
    purpose,
    responsibility,
    authority,
    boundary,
    allowedInterfaces = [],
    prohibitedInterfaces = [],
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_REPOSITORY_SOVEREIGNTY_TYPE;
    this.version = BRC_REPOSITORY_SOVEREIGNTY_VERSION;

    this.id = id;
    this.name = name;

    this.purpose = purpose;

    this.responsibility = responsibility;
    this.authority = authority;

    this.boundary = boundary;

    this.allowedInterfaces = allowedInterfaces;
    this.prohibitedInterfaces = prohibitedInterfaces;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      name: this.name,
      state: this.state
    };
  }

  getSovereigntyDefinition() {
    return {
      purpose: this.purpose,
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      allowedInterfaces: this.allowedInterfaces,
      prohibitedInterfaces: this.prohibitedInterfaces,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  ownsResponsibility(responsibility) {
    return this.responsibility === responsibility;
  }

  controlsAuthority(authority) {
    return this.authority === authority;
  }

  allowsInterface(interfaceName) {
    return this.allowedInterfaces.includes(interfaceName);
  }

  blocksInterface(interfaceName) {
    return this.prohibitedInterfaces.includes(interfaceName);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  transition(nextState) {
    if (!BRC_REPOSITORY_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCRepositorySovereignty(config) {
  return new BRCRepositorySovereignty(config);
}
