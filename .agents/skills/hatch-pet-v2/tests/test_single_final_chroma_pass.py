import unittest
from pathlib import Path

SKILL = Path(__file__).resolve().parents[1] / "SKILL.md"


class SingleFinalBackgroundCleanupTest(unittest.TestCase):
    def test_cleanup_runs_only_after_v2_assembly(self) -> None:
        instructions = SKILL.read_text()

        self.assertEqual(instructions.count("scripts/despill_chroma_edges.py"), 1)
        self.assertNotIn("chroma-despill-standard.json", instructions)
        self.assertIn("native-alpha-pass-through", instructions)
        self.assertIn("CLEANUP_MODE=$(jq -r '.cleanupMode'", instructions)
        self.assertLess(
            instructions.index("scripts/assemble_extended_atlas.py"),
            instructions.index("scripts/despill_chroma_edges.py"),
        )


if __name__ == "__main__":
    unittest.main()
