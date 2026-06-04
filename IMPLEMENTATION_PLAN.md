# DESIGN.md Responsibility Separation Plan

## Stage 1: Boundary Check
- Goal: Separate design-system contract content from Agent/Cursor execution workflow.
- Success Criteria: Confirm `DESIGN.md`, Cursor rule, skill docs, and validators each have a distinct responsibility.
- Tests: Inspect section headings, required markers, and git repository status.
- Status: Completed.

## Stage 2: DESIGN.md Cleanup
- Goal: Keep `DESIGN.md` focused on Sanofi design-system semantics, contracts, and validator index.
- Success Criteria: Remove workflow-style `AI Generation Rules` and replace validation instructions with an index that points to executable rules and validators.
- Tests: `node design-system-plugin/scripts/validate-design-md`.
- Status: Completed.

## Stage 3: Workflow Ownership
- Goal: Make Cursor rule and plugin skill the explicit workflow owners.
- Success Criteria: Cursor and skill docs state that `DESIGN.md` is a contract source, while workflow steps and delivery commands live in Cursor/Skill.
- Tests: `node design-system-plugin/scripts/validate-business-standards`.
- Status: Completed.

## Stage 4: Git Delivery
- Goal: Verify, commit, and push the cleaned documentation split.
- Success Criteria: Relevant validators pass, working tree has only intentional changes, commit is created, and branch is pushed to `origin`.
- Tests: validator batch, `git status`, `git push`.
- Status: Completed.
