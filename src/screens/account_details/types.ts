export type OverviewType = {
  address: string;
  withdrawalAddress: string;
}

export type BalanceType = {
  available: TokenUnit;
  delegate: TokenUnit;
  unbonding: TokenUnit;
  reward: TokenUnit;
  commission?: TokenUnit;
  total: TokenUnit;
}

export type OtherTokenType = {
  denom: string;
  available: TokenUnit;
  reward: TokenUnit;
  commission: TokenUnit;
}

export type DelegationType = {
  validator: AvatarName;
  validatorStatus: {
    status: number;
    jailed: boolean;
  }
  commission: number;
  amount: TokenUnit;
  reward: TokenUnit;
}

export type RedelegationType = {
  to: AvatarName;
  from: AvatarName;
  linkedUntil: string;
  amount: TokenUnit;
}

export type UnbondingType = {
  validator: AvatarName;
  commission: number;
  amount: TokenUnit;
  linkedUntil: string;
}

export type AccountDetailState = {
  loading: boolean;
  exists: boolean;
  desmosProfile: DesmosProfile | null;
  overview: OverviewType;
  balance: BalanceType;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
  delegations: {
    data: DelegationType[];
    count: number;
  }
  redelegations: {
    data: RedelegationType[];
    count: number;
  }
  unbondings: {
    data: UnbondingType[];
    count: number;
  }
  transactions: {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: Transactions[];
  };
}
