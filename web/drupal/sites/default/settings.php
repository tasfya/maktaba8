<?php

include __DIR__ . '/settings/settings.shared.php';

/**
 * Load local development override configuration, if available.
 * ...
 */
if (file_exists(__DIR__ . '/settings/settings.local.php')) {
  include __DIR__ . '/settings/settings.local.php';
}
