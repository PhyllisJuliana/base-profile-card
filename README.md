# base-profile-card

Base Mini App for public onchain profile cards.

## Routes

- `/`
- `/profile/edit`
- `/profile/[address]`
- `/search`
- `/about`

## Notes

- `app/layout.tsx` hardcodes the required `base:app_id` meta tag.
- `lib/wagmi.ts` includes the current builder code and encoded 8021 payload.
- `utils/track.js` is wired into successful profile create and update flows.
- If wallet or chain data is unavailable, the UI falls back to local mock data so every page stays usable.
