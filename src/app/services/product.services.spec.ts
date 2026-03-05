import { TestBed } from '@angular/core/testing';

import { ProductServices } from './product.services';

describe('Product', () => {
  let service: ProductServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
