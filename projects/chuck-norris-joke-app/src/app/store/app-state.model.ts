export interface AppState {
  isLoading: boolean;
  value?: string;
}

export function createInitialAppState(): AppState {
  return {
    isLoading: false,
  };
}
