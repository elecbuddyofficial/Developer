import os
from anthropic import Anthropic
from agent_utils import _load_config_env

_load_config_env()
try:
    client = Anthropic()
    msg = client.messages.create(
        model="claude-3-haiku-20240307",
        max_tokens=10,
        messages=[{"role": "user", "content": "Hello"}]
    )
    print("API is WORKING!")
except Exception as e:
    print(f"API ERROR: {e}")
