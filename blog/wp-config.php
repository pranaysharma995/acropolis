<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'acropoli_infotech_blog');

/** MySQL database username */
define('DB_USER', 'acropoli_pranay');

/** MySQL database password */
define('DB_PASSWORD', 'pranay@123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'T(;G[;>+eW]/{=8|fW:t6hO;a:>?~fmYr.^]+g/ZbpmB@aCM~nF=p):4}Qq6]D2y');
define('SECURE_AUTH_KEY',  'H@pX*.|e1A!E*3jf%S<_w/_jlwr)x}77kp=$$bTn ZNP4u56Sf<O0 @s+N-POI1f');
define('LOGGED_IN_KEY',    'U@ r=u^c!OpzF]SSg} ,z?23YJF#Qa>s]Ox+_vtZAJg/HL{&1 /=aH)9CF8,V7um');
define('NONCE_KEY',        'YcE1r!RAH}Q[7fT2DCY6Dz[7z*@BYVCuot4B8!ILh6cE`c,kh[_C>m5Y.>]$QOS3');
define('AUTH_SALT',        '$bX`UL9ZH-7(VcbpS[*W5Cjq80-s8<9M=@5[T#P!pXAv0wU70e;2_0z@.`vOwXh&');
define('SECURE_AUTH_SALT', '/LdY0DF7pz/,4(2B*h=x>T5S5,! a!= Rp+}(lzu/a5cr0pKMEgBuL-DR13hW_S9');
define('LOGGED_IN_SALT',   'hcs%nc8f@;n>5pnlH{K0?C>,g6z1?{nK4z=uoB,5,oxc.}}Rd|F`-,$y9Em/%#Ya');
define('NONCE_SALT',       '5yO !lYSY0`6lF{-F+@6|nF%$JDa_ADTb=)kxM<uZ];hSiny87*k*Gc,/}{!Qm %');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
