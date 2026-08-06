/**
 * BRC Value Sovereignty Model
 * 
 * Blast-Radius Control (BRC) defines value as a sovereign structural object
 * representing declared contribution, exchange meaning, and recognized worth
 * within a contained system boundary.
 *
 * Value represents meaning assigned to a contribution or exchange.
 *
 * Value does not create ownership.
 *
 * Value does not create authority.
 *
 * Value does not guarantee compensation.
 *
 * Value does not bypass boundaries.
 *
 * Value sovereignty preserves:
 *
 * - Value identity
 * - Source contribution
 * - Responsibility relationship
 * - Authority reference
 * - Boundary integrity
 * - Exchange relationship
 * - Evidence relationship
 * - Continuity protection
 *
 * Value is defined by:
 *
 * - What contribution it represents
 * - Who is responsible for the contribution
 * - What authority relationship applies
 * - What boundary contains the value
 * - What exchange relationship references it
 * - What evidence supports it
 * - What continuity preserves its meaning
 *
 * This module defines value sovereignty structure only.
 *
 * This module does not:
 * - Calculate prices
 * - Create currency
 * - Process payments
 * - Assign financial worth
 * - Manage accounts
 * - Transfer compensation
 * - Execute commerce
 * - Modify external systems
 *
 * Value definition comes before value enforcement.
 */

export const BRC_VALUE_SOVEREIGNTY_TYPE =
  "BRC_VALUE_SOVEREIGNTY";

export const BRC_VALUE_SOVEREIGNTY_VERSION =
  "1.0.0";

export const BRC_VALUE_STATES = Object.freeze([
  "DECLARED",
  "RECOGNIZED",
  "ATTRIBUTED",
  "EXCHANGED",
  "SEALED",
  "ARCHIVED"
]);

export class BRCValueSovereignty {
  constructor({
    id,
    valueType,
    source,
    contributor,
    responsibility,
    authorityReference = null,
    boundary,
    exchangeReference = null,
    evidenceReference = null,
    continuityReference = null,
    state = "DECLARED"
  }) {
    this.type = BRC_VALUE_SOVEREIGNTY_TYPE;
    this.version = BRC_VALUE_SOVEREIGNTY_VERSION;

    this.id = id;

    this.valueType = valueType;

    this.source = source;

    this.contributor = contributor;

    this.responsibility = responsibility;

    this.authorityReference = authorityReference;

    this.boundary = boundary;

    this.exchangeReference = exchangeReference;

    this.evidenceReference = evidenceReference;

    this.continuityReference = continuityReference;

    this.state = state;
  }

  describe() {
    return {
      type: this.type,
      version: this.version,
      id: this.id,
      valueType: this.valueType,
      state: this.state
    };
  }

  getValueDefinition() {
    return {
      valueType: this.valueType,
      source: this.source,
      contributor: this.contributor,
      responsibility: this.responsibility,
      authorityReference: this.authorityReference,
      boundary: this.boundary,
      exchangeReference: this.exchangeReference,
      evidenceReference: this.evidenceReference,
      continuityReference: this.continuityReference,
      state: this.state
    };
  }

  belongsToContributor(contributor) {
    return this.contributor === contributor;
  }

  belongsToSource(source) {
    return this.source === source;
  }

  referencesAuthority(authority) {
    return this.authorityReference === authority;
  }

  preservesBoundary() {
    return Boolean(this.boundary);
  }

  referencesExchange(exchange) {
    return this.exchangeReference === exchange;
  }

  referencesEvidence(evidence) {
    return this.evidenceReference === evidence;
  }

  preservesContinuity(reference) {
    return this.continuityReference === reference;
  }

  transition(nextState) {
    if (!BRC_VALUE_STATES.includes(nextState)) {
      return false;
    }

    this.state = nextState;
    return true;
  }
}

export function createBRCValueSovereignty(config) {
  return new BRCValueSovereignty(config);
}
