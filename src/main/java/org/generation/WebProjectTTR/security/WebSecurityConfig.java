package org.generation.WebProjectTTR.security;

import org.springframework.beans.factory.annotation.*;
import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;
@Configuration
public class WebSecurityConfig {

    @Autowired
    private DataSource dataSource;

    @Autowired
    public void configAuthentication( AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .dataSource(dataSource)     //Connect to the database
                .usersByUsernameQuery("select username, password, enabled from user where username=?")     //Checking the username and password
                .authoritiesByUsernameQuery("select username, role from user where username=?")
        ;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {


        //csrf : Cross-site Request Forgery
        http.csrf().disable();

        //Not using the Spring Security HttpSecurity default login page, This is to specify our own login page to route to.
        http.formLogin().loginPage("/loginPage");

        //if user successfully login, user will be directed to the listCollection.html
        http.formLogin()
                .defaultSuccessUrl("/listCollection");

        //if user successfully logout, user will be directed to the index.html
        http.logout()
                .logoutSuccessUrl("/index");

        /*
        .antMatchers(......).permitAll() - tells Spring Security that these webpages
         do not need to have login services

        .antMatchers(.....).hasRole("ADMIN") - tells Spring Security that only user
        with ADMIN role will be able to access the listCollection.html
        */

        http.authorizeRequests()
                .antMatchers("/", "/products", "/aboutme").permitAll()
                .antMatchers("/listCollection/**").hasRole("ADMIN")
                .and()
                .formLogin()
                .loginPage("/loginPage").permitAll()
                .and()
                .logout().permitAll();

        return http.build();
    }
}
