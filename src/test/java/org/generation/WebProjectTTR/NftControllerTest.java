package org.generation.WebProjectTTR;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class NftControllerTest {

    NftController nftController;
    @Mock
    NftService nftService;

    @BeforeEach
    public void setup() {
        nftController = new NftController(nftService);
    }

    @Test
    public void listNftService() {
        nftController.getNft();
        Mockito.verify(nftService).all();
    }

    @Test
    public void findNftService() {
        int id = 2;
        nftController.findNftById(id);
        Mockito.verify(nftService).findById(id);
    }

    @Test
    public void deleteItemService() {
        int id = 2;
        nftController.delete(id);
        Mockito.verify(nftService).delete(id);
    }
}
