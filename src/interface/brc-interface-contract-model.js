/**
 * BRC Interface Contract Model
 * 
 * Blast-Radius Control (BRC) defines interfaces as controlled points of
 * communication between sovereign system components.
 *
 * An interface does not remove boundaries.
 *
 * An interface creates a declared crossing point where movement can occur
 * while preserving responsibility, authority, continuity, and containment.
 *
 * Interface contracts define:
 *
 * - Who communicates
 * - What may move
 * - Where movement is allowed
 * - What remains protected
 * - What authority does not transfer
 *
 * This module defines interface contract structure only.
 *
 * This module does not:
 * - Execute communication
 * - Route requests
 * - Validate permissions
 * - Transfer authority
 * - Modify external systems
 * - Perform data exchange
 *
 * Interface definition comes before interface enforcement.
 */

export const BRC_INTERFACE_CONTRACT_TYPE = "BRC_INTERFACE_CONTRACT";

export const BRC_INTERFACE_CONTRACT_VERSION = "1.0.0";

export const BRC_INTERFACE_STATES = Object.freeze([
  "DECLARED",
  "ACTIVE",
  "RESTRICTED",
  "SUSPENDED",
  "REVOKED"
]);

export class BRCInterfaceContract {
  constructor({
    id,
    source,
    destination,
    sourceBoundary,
    destinationBoundary,
    allowedMovement = [],
    prohibitedMovement = [],
    authorityOwner,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_INTERFACE_CONTRACT_TYPE;
    this.version = BRC_INTERFACE_CONTRACT_VERSION;

    this.id = id;

    this.source = source;
    this.destination = destination;

    this.sourceBoundary = sourceBoundary;
    this.destinationBoundary = destinationBoundary;

    this.allowedMovement = allowedMovement;
    this.prohibitedMovement = prohibitedMovement;

    this.authorityOwner = authorityOwner;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      source: this.source,
      destination: this.destination,
      state: this.state
    };
  }

  getContractDefinition() {
    return {
      source: this.source,
      destination: this.destination,
      sourceBoundary: this.sourceBoundary,
      destinationBoundary: this.destinationBoundary,
      allowedMovement: this.allowedMovement,
      prohibitedMovement: this.prohibitedMovement,
      authorityOwner: this.authorityOwner,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  allowsMovement(action) {
    return this.allowedMovement.includes(action);
  }

  deniesMovement(action) {
    return this.prohibitedMovement.includes(action);
  }

  crossesBoundary() {
    return this.sourceBoundary !== this.destinationBoundary;
  }

  preservesAuthority() {
    return Boolean(this.authorityOwner);
  }

  preservesContinuity() {
    return Boolean(this.continuityReference);
  }

  transition(nextState) {
    if (!BRC_INTERFACE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCInterfaceContract(config) {
  return new BRCInterfaceContract(config);
}
