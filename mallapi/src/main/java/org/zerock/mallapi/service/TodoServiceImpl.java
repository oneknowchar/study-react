package org.zerock.mallapi.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.repository.TodoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@Transactional
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {
	private final TodoRepository todoRepository;

	@Override
	public TodoDTO get(Long tno) {
		Todo todo = todoRepository.findById(tno).orElseThrow();
		return entityToDTO(todo);
	}

	@Override
	public Long register(TodoDTO dto) {

		Todo result = todoRepository.save(dtoToEntity(dto)); // insert, update 모두 save(E);

		return result.getTno();
	}

	@Override
	public void modify(TodoDTO dto) {
		Todo todo = todoRepository.findById(dto.getTno()).orElseThrow();
		todo.setTitle(dto.getTitle());
		todo.setContent(dto.getContent());
		todo.setComplete(dto.isComplete());
		todo.setDueDate(dto.getDueDate());

		todoRepository.save(todo); // insert, update 모두 save(E);
	}

	@Override
	public void remove(Long tno) {
		todoRepository.deleteById(tno);
	}

	@Override
	public PageResponseDTO<TodoDTO> getList(PageRequestDTO pageRequestDTO) {
		Page<Todo> result = todoRepository.search1(pageRequestDTO);

		List<TodoDTO> dtoList = result.get().map(todo -> entityToDTO(todo)).collect(Collectors.toList());
		long totalCount = result.getTotalElements();
		PageResponseDTO<TodoDTO> responseDTO = PageResponseDTO.<TodoDTO>withAll()
				.dtoList(dtoList)
				.pageRequestDTO(pageRequestDTO)
				.totalCount(totalCount)
				.build();
		
		return responseDTO;
	}

}
