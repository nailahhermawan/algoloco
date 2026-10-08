import { describe, expect, it } from 'vitest';
import { initialPlayerState, playerReducer, type PlayerState } from '@/engine/player';
import { DEFAULT_PLAYBACK_SPEED, MAX_PLAYBACK_SPEED, MIN_PLAYBACK_SPEED } from '@/engine/constants';

describe('playerReducer', () => {
  it('should initialize with default state', () => {
    expect(initialPlayerState).toEqual({
      stepIndex: 0,
      playing: false,
      speed: DEFAULT_PLAYBACK_SPEED,
    });
  });

  describe('PLAY and PAUSE', () => {
    it('should set playing to true when PLAY is dispatched', () => {
      const state = playerReducer(initialPlayerState, { type: 'PLAY' });
      expect(state.playing).toBe(true);
    });

    it('should not start playing if already at the last step', () => {
      const state: PlayerState = { stepIndex: 4, playing: false, speed: 1.0 };
      const next = playerReducer(state, { type: 'PLAY', totalSteps: 5 });
      expect(next.playing).toBe(false);
    });

    it('should not start playing if totalSteps is 0', () => {
      const state = playerReducer(initialPlayerState, { type: 'PLAY', totalSteps: 0 });
      expect(state.playing).toBe(false);
    });

    it('should set playing to false when PAUSE is dispatched', () => {
      const state: PlayerState = { stepIndex: 2, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'PAUSE' });
      expect(next.playing).toBe(false);
    });
  });

  describe('NEXT', () => {
    it('should increment stepIndex by 1 while playing', () => {
      const state: PlayerState = { stepIndex: 1, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'NEXT', totalSteps: 10 });
      expect(next.stepIndex).toBe(2);
      expect(next.playing).toBe(true);
    });

    it('should pause playback when advancing to the last step', () => {
      const state: PlayerState = { stepIndex: 3, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'NEXT', totalSteps: 5 });
      expect(next.stepIndex).toBe(4);
      expect(next.playing).toBe(false);
    });

    it('should clamp at the last step and pause when already at the end', () => {
      const state: PlayerState = { stepIndex: 4, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'NEXT', totalSteps: 5 });
      expect(next.stepIndex).toBe(4);
      expect(next.playing).toBe(false);
    });

    it('should handle zero totalSteps gracefully', () => {
      const state: PlayerState = { stepIndex: 2, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'NEXT', totalSteps: 0 });
      expect(next.stepIndex).toBe(0);
      expect(next.playing).toBe(false);
    });
  });

  describe('PREV', () => {
    it('should decrement stepIndex', () => {
      const state: PlayerState = { stepIndex: 3, playing: false, speed: 1.0 };
      const next = playerReducer(state, { type: 'PREV' });
      expect(next.stepIndex).toBe(2);
    });

    it('should clamp at 0 and not decrement below 0', () => {
      const state: PlayerState = { stepIndex: 0, playing: false, speed: 1.0 };
      const next = playerReducer(state, { type: 'PREV' });
      expect(next.stepIndex).toBe(0);
    });
  });

  describe('SEEK', () => {
    it('should seek to a valid target index', () => {
      const state: PlayerState = { stepIndex: 0, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'SEEK', index: 3, totalSteps: 10 });
      expect(next.stepIndex).toBe(3);
      expect(next.playing).toBe(true);
    });

    it('should clamp seek index to lower bound 0', () => {
      const state: PlayerState = { stepIndex: 3, playing: false, speed: 1.0 };
      const next = playerReducer(state, { type: 'SEEK', index: -5, totalSteps: 10 });
      expect(next.stepIndex).toBe(0);
    });

    it('should clamp seek index to upper bound (totalSteps - 1) and pause', () => {
      const state: PlayerState = { stepIndex: 0, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'SEEK', index: 15, totalSteps: 5 });
      expect(next.stepIndex).toBe(4);
      expect(next.playing).toBe(false);
    });

    it('should handle empty steps gracefully', () => {
      const state: PlayerState = { stepIndex: 3, playing: true, speed: 1.0 };
      const next = playerReducer(state, { type: 'SEEK', index: 2, totalSteps: 0 });
      expect(next.stepIndex).toBe(0);
      expect(next.playing).toBe(false);
    });
  });

  describe('RESET', () => {
    it('should reset stepIndex to 0 and playing to false while keeping speed', () => {
      const state: PlayerState = { stepIndex: 8, playing: true, speed: 2.0 };
      const next = playerReducer(state, { type: 'RESET' });
      expect(next).toEqual({
        stepIndex: 0,
        playing: false,
        speed: 2.0,
      });
    });
  });

  describe('SET_SPEED', () => {
    it('should set speed within valid bounds', () => {
      const state = playerReducer(initialPlayerState, { type: 'SET_SPEED', speed: 2.5 });
      expect(state.speed).toBe(2.5);
    });

    it('should clamp speed to MIN_PLAYBACK_SPEED (0.25)', () => {
      const state = playerReducer(initialPlayerState, { type: 'SET_SPEED', speed: 0.05 });
      expect(state.speed).toBe(MIN_PLAYBACK_SPEED);
    });

    it('should clamp speed to MAX_PLAYBACK_SPEED (4.0)', () => {
      const state = playerReducer(initialPlayerState, { type: 'SET_SPEED', speed: 10.0 });
      expect(state.speed).toBe(MAX_PLAYBACK_SPEED);
    });
  });
});
