/**
 * BRC Containment Enforcement Model
 * 
 * Blast-Radius Control (BRC) defines containment enforcement as the structural
 * application of declared boundaries, authority ownership, interface rules,
 * and mutation limits.
 *
 * Enforcement does not create the boundary.
 *
 * Enforcement applies the boundary that already exists.
 *
 * This module represents the transition from:
 *
 * Definition
 *      ↓
 * Structure
 *      ↓
 * Enforcement
 *
 * Containment enforcement ensures:
 *
 * - Movement remains within declared radius
 * - Authority remains with its owner
 * - Interfaces remain controlled
 * - Mutation remains local
 * - Continuity remains protected
 *
 * This module does not:
 * - Execute business logic
 * - Replace security systems
 * - Manage users
 * - Perform authentication
 * - Create authority
 * - Modify ownership
 *
 * Containment definition precedes containment enforcement.
 */

export const BRC_CONTAINMENT_ENFORCEMENT_TYPE =
  "BRC_CONTAINMENT_ENFORCEMENT";

export const BRC_CONTAINMENT_ENFORCEMENT_VERSION =
  "1.0.0";

export const BRC_ENFORCEMENT_RESULTS = Object.freeze([
  "ALLOWED",
  "DENIED",
  "REQUIRES_BOUNDARY_CROSSING",
  "REQUIRES_AUTHORITY_REVIEW"
]);

export class BRCContainmentEnforcement {
  constructor({
    boundary,
    authority,
    interfaceContract = null,
    mutation = null,
    continuity = null
  }) {
    this.type = BRC_CONTAINMENT_ENFORCEMENT_TYPE;
    this.version = BRC_CONTAINMENT_ENFORCEMENT_VERSION;

    this.boundary = boundary;
    this.authority = authority;

    this.interfaceContract = interfaceContract;
    this.mutation = mutation;
    this.continuity = continuity;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      boundary: this.boundary,
      authority: this.authority
    };
  }

  evaluateMovement(action) {
    if (
      this.interfaceContract &&
      this.interfaceContract.deniesMovement(action)
    ) {
      return "DENIED";
    }

    if (
      this.interfaceContract &&
      this.interfaceContract.allowsMovement(action)
    ) {
      return "ALLOWED";
    }

    return "REQUIRES_BOUNDARY_CROSSING";
  }

  evaluateAuthority(owner) {
    if (
      this.authority &&
      this.authority.owner === owner
    ) {
      return "ALLOWED";
    }

    return "REQUIRES_AUTHORITY_REVIEW";
  }

  evaluateMutation() {
    if (
      this.mutation &&
      this.mutation.isContained()
    ) {
      return "ALLOWED";
    }

    return "REQUIRES_BOUNDARY_CROSSING";
  }

  evaluateContinuity() {
    if (
      this.continuity &&
      this.continuity.canContinueAfterChange()
    ) {
      return "ALLOWED";
    }

    return "REQUIRES_AUTHORITY_REVIEW";
  }
}

export function createBRCContainmentEnforcement(config) {
  return new BRCContainmentEnforcement(config);
}
