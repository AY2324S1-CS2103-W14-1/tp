package seedu.address.storage;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PasswordManagerTest {

    private PasswordManager passwordManager;
    private String originalPassword;

    @BeforeEach
    public void setUp() {
        passwordManager = new PasswordManager();
        originalPassword = passwordManager.getPassword();
    }

    @Test
    public void SetAndCheck() throws Exception {
        passwordManager.setPassword("samplePassword");
        assert(passwordManager.check("samplePassword"));
    }

    @Test
    public void GetAndCheck() throws Exception {
        String password = passwordManager.getPassword();
        assert(passwordManager.check(password));
    }

    @Test
    public void SetNullAndCheck() throws Exception {
        String nullstring = null;
        passwordManager.setPassword(nullstring);
        assert(passwordManager.check(""));
    }

    @Test
    public void SetNullAndGet() throws Exception {
        String nullstring = null;
        passwordManager.setPassword(nullstring);
        assert(passwordManager.getPassword().isEmpty());
    }


    @AfterEach
    public void setOriginalPasswordBack() {
        passwordManager.setPassword(originalPassword);
    }

}
