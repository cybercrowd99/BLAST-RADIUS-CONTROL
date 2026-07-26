/**
 * BRC Transaction Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines transactions as sovereign structural
 * objects representing declared exchanges, state changes, or value movement
 * relationships within a contained system boundary.
 *
 * A transaction represents an exchange event.
 *
 * A transaction does not create ownership.
 *
 * A transaction does not create authority.
 *
 * A transaction does not bypass boundaries.
 *
 * A transaction does not validate external value systems.
 *
 * Transaction sovereignty preserves:
 *
 * - Transaction identity
 * - Participant responsibility
 * - Authority relationships
 * - Boundary integrity
 * - Movement definition
 * - Evidence relationship
 * - Continuity protection
 *
 * A transaction is defined by:
 *
 * - What is exchanged
 * - Who participates
 * - What responsibility applies
 * - What authority references exist
 * - What boundary contains the exchange
 * - What movement is permitted
 * - What evidence relationship exists
 * - What continuity is preserved
 *
 * This module defines transaction sovereignty structure only.
 *
 * This module does not:
 * - Process payments
 * - Transfer funds
 * - Execute commerce
 * - Validate accounts
 * - Manage wallets
 * - Resolve disputes
 * - Grant permissions
 * - Modify external systems
 *
 * Transaction definition comes before transaction enforcement.
 */

export const BRC_TRANSACTION_SOVEREIGNTY_TYPE =
  "BRC_TRANSACTION_SOVEREIGNTY";

export const BRC_TRANSACTION_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_TRANSACTION_STATES = Object.freeze([
  "DECLARED",
  "INITIATED",
  "RECORDED",
  "VERIFIED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCTransactionSovereignty {
  constructor({
    id,
    transactionType,
    participants = [],
    responsibility,
    authorityReference = null,
    boundary,
    movement = [],
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_TRANSACTION_SOVEREIGNTY_TYPE;
    this.version = BRC_TRANSACTION_SOVEREIGNTY_VERSION;

    this.id = id;

    this.transactionType = transactionType;

    this.participants = participants;

    this.responsibility = responsibility;

    this.authorityReference = authorityReference;

    this.boundary = boundary;

    this.movement = movement;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      transactionType: this.transactionType,
      state: this.state
    };
  }

  getTransactionDefinition() {
    return {
      transactionType: this.transactionType,
      participants: this.participants,
      responsibility: this.responsibility,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      movement: this.movement,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  includesParticipant(participant) {
    return this.participants.includes(participant);
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  allowsMovement(action) {
    return this.movement.includes(action);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    if (!BRC_TRANSACTION_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCTransactionSovereignty(config) {
  return new BRCTransactionSovereignty(config);
}
