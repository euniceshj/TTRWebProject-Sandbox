package org.generation.WebProjectTTR;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
public class NftServiceMySQLTest {

    @Mock
    NftRepository nftRepository;

    NftService nftService;
    Nft nftMock;

    @BeforeEach
    public void setup() {
        nftService = new NftServiceMySQL(nftRepository);
        nftMock = Mockito.mock(Nft.class);
    }

    @Test
    public void saveCallsItemsRepositorySave() {
        nftService.save(nftMock);
        Mockito.verify(nftRepository).save(nftMock);
    }

    @Test
    public void deleteCallsItemsRepositoryDelete() {
        int itemId = 2;
        nftService.delete(itemId);
        Mockito.verify(nftRepository).deleteById(itemId);
    }

    @Test
    public void listCallsItemsRespositoryList()
    {
        nftService.all();
        Mockito.verify(nftRepository).findAll();
    }

    @Test
    public void findByIdCallsItemsRepositoryFindById()
    {
        int itemId = 10;

        //In Mockito, we can specify what to return when a method is called.
        //The test is against the return the actual object vs the mock object

        //itemRepository.findById will return a mock item to compare with the actual itemService.findById
        Mockito.when(nftRepository.findById(itemId)).thenReturn(Optional.of(nftMock));

        //Actual object to be tested
        Nft item = nftService.findById(itemId);

        //assertEquals is to check if both actual item object and the mock item object is equal
        Assertions.assertEquals(item, nftMock);

        //Optional<Item> item = itemRepository.findById(itemId);
        //Cannot be a null
        //Item itemResponse = item.get();
    }
}
