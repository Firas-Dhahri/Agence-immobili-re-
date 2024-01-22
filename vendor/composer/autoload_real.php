<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit00b95e407ef1d2a31ebdbea81abc7eef
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit00b95e407ef1d2a31ebdbea81abc7eef', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit00b95e407ef1d2a31ebdbea81abc7eef', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit00b95e407ef1d2a31ebdbea81abc7eef::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
