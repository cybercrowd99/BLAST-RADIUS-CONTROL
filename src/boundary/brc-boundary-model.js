/**
 * BRC Boundary Model
 *
 * Blast-Radius Control (BRC) uses boundaries to define where responsibility,
 * authority, movement, and containment begin and end.
 *
 * This module defines boundary structure only.
 *
 * This module does not:
 * - Enforce permissions
 * - Execute mutations
 * - Perform routing
 * - Grant authority
 * - Modify external systems
 *
 * Boundary definition comes before boundary enforcement.
 */

export const BRC_BOUNDARY_TYPE = "BRC_BOUNDARY";

export const BRC_BOUNDARY_VERSION = "1.0.0";

export const BRC_BOUNDARY_LAYERS = Object.freeze([
  "SURFACE",
  "ENGINE",
  "AUTHORITY",
  "VAULT",
  "ADAPTER"
]);

export class BRCBoundary {
  constructor({
    id,
    name,
    layer,
    responsibility,
    authority,
    allowedMovement = [],
    prohibitedMovement = [],
    containment = true
  }) {
    this.type = BRC_BOUNDARY_TYPE;
    this.version = BRC_BOUNDARY_VERSION;

    this.id = id;
    this.name = name;

    this.layer = layer;

    this.responsibility = responsibility;
    this.authority = authority;

    this.allowedMovement = allowedMovement;
    this.prohibitedMovement = prohibitedMovement;

    this.containment = containment;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      name: this.name,
      layer: this.layer
    };
  }

  getBoundaryDefinition() {
    return {
      layer: this.layer,
      responsibility: this.responsibility,
      authority: this.authority,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      containment: this.containment
    };
  }

  beginsResponsibilityHere() {
    return Boolean(this.responsibility);
  }

  endsAuthorityHere() {
    return Boolean(this.authority);
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  deniesMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  requiresCrossing(targetLayer) {
    return this.layer !== targetLayer;
  }
}

export function createBRCBoundary(config) {
  return new BRCBoundary(config);
}
