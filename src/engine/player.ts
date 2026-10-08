import { DEFAULT_PLAYBACK_SPEED, MAX_PLAYBACK_SPEED, MIN_PLAYBACK_SPEED } from './constants';

export interface PlayerState {
  stepIndex: number;
  playing: boolean;
  speed: number;
}

export type PlayerAction =
  | { type: 'PLAY'; totalSteps?: number }
  | { type: 'PAUSE' }
  | { type: 'NEXT'; totalSteps: number }
  | { type: 'PREV' }
  | { type: 'SEEK'; index: number; totalSteps: number }
  | { type: 'RESET' }
  | { type: 'SET_SPEED'; speed: number };

export const initialPlayerState: PlayerState = {
  stepIndex: 0,
  playing: false,
  speed: DEFAULT_PLAYBACK_SPEED,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Pure playback reducer managing step execution state.
 */
export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'PLAY': {
      if (action.totalSteps !== undefined) {
        const maxIndex = Math.max(0, action.totalSteps - 1);
        if (state.stepIndex >= maxIndex || action.totalSteps === 0) {
          return { ...state, playing: false };
        }
      }
      return { ...state, playing: true };
    }

    case 'PAUSE': {
      return { ...state, playing: false };
    }

    case 'NEXT': {
      if (action.totalSteps <= 0) {
        return { ...state, stepIndex: 0, playing: false };
      }
      const maxIndex = Math.max(0, action.totalSteps - 1);
      const nextIndex = state.stepIndex + 1;

      if (nextIndex >= maxIndex) {
        return {
          ...state,
          stepIndex: maxIndex,
          playing: false,
        };
      }

      return {
        ...state,
        stepIndex: nextIndex,
      };
    }

    case 'PREV': {
      return {
        ...state,
        stepIndex: Math.max(0, state.stepIndex - 1),
      };
    }

    case 'SEEK': {
      if (action.totalSteps <= 0) {
        return { ...state, stepIndex: 0, playing: false };
      }
      const maxIndex = Math.max(0, action.totalSteps - 1);
      const targetIndex = clamp(action.index, 0, maxIndex);
      const isEnd = targetIndex >= maxIndex;

      return {
        ...state,
        stepIndex: targetIndex,
        playing: isEnd ? false : state.playing,
      };
    }

    case 'RESET': {
      return {
        ...state,
        stepIndex: 0,
        playing: false,
      };
    }

    case 'SET_SPEED': {
      const clampedSpeed = clamp(action.speed, MIN_PLAYBACK_SPEED, MAX_PLAYBACK_SPEED);
      return {
        ...state,
        speed: clampedSpeed,
      };
    }

    default:
      return state;
  }
}
