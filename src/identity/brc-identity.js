/**
 * BRC Identity Model
 * 
 * Blast-Radius Control (BRC) is a structural containment architecture.
 *
 * This module defines the identity contract of a BRC-controlled component.
 *
 * Responsibility:
 * - Identify system components
 * - Define structural ownership fields
 * - Preserve separation between responsibility, authority, boundary,
 *   movement, and containment
 *
 * This module does not:
 * - Enforce permissions
 * - Execute mutations
 * - Perform routing
 * - Grant authority
 * - Control business behavior
 *
 * Identity comes before enforcement.
 */

export const BRC_IDENTITY_TYPE = "BLAST_RADIUS_CONTROL";

export const BRC_IDENTITY_VERSION = "1.0.0";

export const BRC_IDENTITY_FIELDS = Object.freeze([
  "responsibility",
  "authority",
  "boundary",
  "movement",
  "containment"
]);

export class BRCIdentity {
  constructor({
    id,
    name,
    responsibility,
    authority,
    boundary,
    movement,
    containment,
    continuity = null
  }) {
    this.type = BRC_IDENTITY_TYPE;
    this.version = BRC_IDENTITY_VERSION;

    this.id = id;
    this.name = name;

    this.responsibility = responsibility;
    this.authority = authority;
    this.boundary = boundary;
    this.movement = movement;
    this.containment = containment;

    this.continuity = continuity;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      name: this.name
    };
  }

  getStructuralIdentity() {
    return {
      responsibility: this.responsibility,
      authority: this.authority,
      boundary: this.boundary,
      movement: this.movement,
      containment: this.containment,
      continuity: this.continuity
    };
  }

  validateIdentity() {
    return BRC_IDENTITY_FIELDS.every(
      (field) =>
        this[field] !== undefined &&
        this[field] !== null
    );
  }

  isWithinBoundary(targetBoundary) {
    return this.boundary === targetBoundary;
  }

  requiresBoundaryCrossing(targetBoundary) {
    return !this.isWithinBoundary(targetBoundary);
  }
}

export function createBRCIdentity(config) {
  return new BRCIdentity(config);
}
