/**
 * BRC Market Sovereignty Model
 *
 * Blast-Radius Control (BRC) defines markets as sovereign structural objects
 * representing declared exchange environments where value relationships may
 * occur within a contained system boundary.
 *
 * A market represents a structured exchange boundary.
 *
 * A market does not create ownership.
 *
 * A market does not create authority.
 *
 * A market does not guarantee exchange.
 *
 * A market does not bypass boundaries.
 *
 * Market sovereignty preserves:
 *
 * - Market identity
 * - Participant relationships
 * - Value relationships
 * - Transaction boundaries
 * - Authority references
 * - Evidence relationships
 * - Continuity protection
 * - Controlled movement
 *
 * A market is defined by:
 *
 * - What exchange environment it represents
 * - Who may participate
 * - What value relationships exist
 * - What transaction types are recognized
 * - What boundaries contain activity
 * - What authority relationships apply
 * - What evidence supports exchange
 * - What continuity preserves meaning
 *
 * This module defines market sovereignty structure only.
 *
 * This module does not:
 * - Create marketplaces
 * - Match buyers and sellers
 * - Set prices
 * - Execute commerce
 * - Process payments
 * - Manage accounts
 * - Transfer ownership
 * - Modify external systems
 *
 * Market definition comes before market enforcement.
 */

export const BRC_MARKET_SOVEREIGNTY_TYPE =
  "BRC_MARKET_SOVEREIGNTY";

export const BRC_MARKET_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_MARKET_STATES = Object.freeze([
  "DECLARED",
  "OPEN",
  "RESTRICTED",
  "SUSPENDED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCMarketSovereignty {
  constructor({
    id,
    marketType,
    participants = [],
    valueReferences = [],
    transactionReferences = [],
    authorityReference = null,
    boundary,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_MARKET_SOVEREIGNTY_TYPE;
    this.version = BRC_MARKET_SOVEREIGNTY_VERSION;

    this.id = id;

    this.marketType = marketType;

    this.participants = participants;

    this.valueReferences = valueReferences;

    this.transactionReferences = transactionReferences;

    this.authorityReference = authorityReference;

    this.boundary = boundary;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      marketType: this.marketType,
      state: this.state
    };
  }

  getMarketDefinition() {
    return {
      marketType: this.marketType,
      participants: this.participants,
      valueReferences: this.valueReferences,
      transactionReferences: this.transactionReferences,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  includesParticipant(participant) {
    return this.participants.includes(participant);
  }

  referencesValue(value) {
    return this.valueReferences.includes(value);
  }

  referencesTransaction(transaction) {
    return this.transactionReferences.includes(transaction);
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    if (!BRC_MARKET_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCMarketSovereignty(config) {
  return new BRCMarketSovereignty(config);
}
